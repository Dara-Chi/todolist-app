import React, { useState, useEffect } from "react";
import axios from 'axios';
import CurrentDate from "./headingComponent/CurrentDate";
import Menu from "./headingComponent/Menu";
import SimpleSearch from "./headingComponent/SimpleSearch";
import UpcomingTask from "./sidebarComponent/UpcomingTask";
import List from "./sidebarComponent/List";
import Tag from "./sidebarComponent/Tag";
import SortButton from "./mainContentComponent/SortButton";
import CreateTask from "./mainContentComponent/CreateTask";
import ExportList from "./mainContentComponent/ExportList";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import TagItems from './sidebarComponent/TagItems';
import AddTagName from "./sidebarComponent/AddTagName";
import AddListName from './sidebarComponent/AddListName';
import TaskItemList from "./mainContentComponent/TaskItemList";
import ListItems from "./sidebarComponent/ListItems";
import FiveDays from"./sidebarComponent/FiveDays";
import TasksFound from "./mainContentComponent/TasksFound";
import getDay from './utils/get-day';

function App () {
  //updating date component if data is updated/inserted new/deleted
  //fetch data when the component mounts.Providing an empty array as second argument... 
  //to the effect hook to avoid activating it on component updates but only for the mounting of the component.
  const [dateItems, _setDateItems] = useState([]);

  function setDateItems (...args) {
    console.log('setting date items to:', args);
    _setDateItems(...args);
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/tasks', 
      );
      if (result.fatal) {
        alert('request failed. please restart the server');
        return;
      }
      console.log(result.data);
      setDateItems(result.data);
    };
 
    fetchData();
  }, []);

  function updateTask (updatedTask) {
    setDateItems(dateItems.map(task => task.t_id === updatedTask.t_id ? updatedTask : task));
    document.getElementById('editBtn').innerHTML= 'Saved';
  }

  function deleteTask (deleteTask) {
    setDateItems(dateItems.filter(task => task.t_id !== deleteTask.t_id));
  }
 
  //fetch list items from database
  // set Item array [] state; orgingal state for your reference. 
  const [listItems, setListItems] = useState([" "]);
  useEffect(() => {
    const fetchListItemData = async() => {
      const result = await axios(
        'http://localhost:8080/lists',
      );
      if (result.fatal) {
        alert('request failed. please restart the server');
        return;
      }
      setListItems(result.data);
    };
    fetchListItemData();
  },[]);

  //append new list item to old list items. 
  async function addListItem(newListItem){
    console.log('creating new list item', newListItem);
    let res = await axios.post( 'http://localhost:8080/createList',  newListItem)
    .then((response) => {
      setListItems([...listItems, response.data]);
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
  }

  async function onSubmitEditListItem(editedList){
    console.log('edited list: ', editedList);
    var c_id = editedList.c_id;
    try {
      const res = await axios.put('http://localhost:8080/updateList/'+ c_id, editedList);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function onDeleteListItem(listItemDeleted){
    console.log('delete?', listItemDeleted);
    try{
      let res = await axios.delete('http://localhost:8080/deleteList/' + listItemDeleted.c_id);
      console.log(res.data);
    } catch(error){
      console.log(error);
    }
  }

  function updateListItems(updatedList){
    setListItems(listItems.map(listItem => listItem.c_id === updatedList.c_id ?updatedList:listItem));
  }

  function deleteList(deletedList){
    setListItems(listItems.filter(listItem => listItem.c_id !== deletedList.c_id));
  }
  const [tags, setTags] = useState([" "]);
  useEffect(() => {
    const fetchTagItemData = async() => {
      const result = await axios(
        'http://localhost:8080/tags',
      );
      if (result.fatal) {
        alert('request failed. please restart the server');
        return;
      }
      setTags(result.data);
    };
    fetchTagItemData();
  },[]);

  //append new tag item to old list items. 
  async function addTagItem(newTagItem){
    console.log('creating new list item', newTagItem);
    let res = await axios.post( 'http://localhost:8080/CreateTag', newTagItem)
    .then((response) => {
      setTags([...tags, response.data]);
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
  }

  async function onDeleteTagItem(deletedTag){
    console.log('creating new tag item', deletedTag);
    try{
      let res = await axios.delete('http://localhost:8080/DeleteTag/'+ deletedTag.g_id);
      console.log(res.data);
    } catch(error){
      console.log(error);
    }
  }

  function updateTag(updatedTag){
    setTags(tags.map(tagItem => tagItem.g_id===updatedTag.g_id? updatedTag:tagItem));
  }

  function deleteTag(deletedTag){
    setTags(tags.filter(tag => tag.g_id !== deletedTag.g_id));
  }

  async function onSubmitEditTag(editedTag){
    console.log('edited tag: ', editedTag);
    try {
      const res = await axios.put('http://localhost:8080/UpdateTag/'+ editedTag.g_id, editedTag);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  //get how many "count" days.
  function getDays (count) {
    const today = new Date();
    return Array.from(new Array(count), (_, i) => {
      const day = getDay(today);
      day.setDate(day.getDate() + i);
      return day;
    });
  }

  function dayListing () {
    console.log(getDays(5));
    return getDays(5);
  }
 
  //set five days for Upcoming task
  const [fiveDays, setFiveDays] = useState(dayListing());
  const [currentDay, setCurrentDay] = useState(fiveDays[0]);
  function filterTasksByDay (task) {
    const taskDueDate = getDay(new Date(task.t_due_date)); // time
    return taskDueDate.valueOf() === currentDay.valueOf();
  }

  // 1:to_start 2:ongoing 3:done 4:overdue
  const filters = [
    { value: 0, title: 'All' },
    { value: 1, title: 'To Start' },
    { value: 2, title: 'Ongoing' },
    { value: 3, title: 'Done' }
  ];
  const [filterStatus, setStatus] = useState(0);
  function filterTaskByStatus (task){
    if (filterStatus === 0) return true;
    const taskStatus = task.t_status;
    return taskStatus === filterStatus;
  }

  async function createTaskPost(newTask){
    console.log('creating new task item', newTask);
    let res = await axios.post( 'http://localhost:8080/CreateTask', newTask)
    .then((response) => {
      setListItems([...listItems, response.data]);
      document.getElementById("createSaveBtn").innerHTML = 'Saved';
      setTimeout(window.location.reload(),5000);
    }, (error) => {
      console.log(error);
    });
  }

  async function exportListPost(listExported){
    console.log('request body: ', listExported);
    let res = await axios.post('http://localhost:8080/sendList',listExported)
    .then((response)=>{
      console.log("This is res: ",response.data);
    }, (error)=>{
      console.log(error);
    });
  }

  async function onSubmitEdit(editedTask){
    var t_id = editedTask.t_id;
    try {
      const res = await axios.put('http://localhost:8080/tasks/'+ t_id, editedTask);
    } catch (error) {
      console.log(error);
    }
  }

  async function onClickDeleteTask(deletedTask){
    try{
      const res = await axios.put('http://localhost:8080/deleteTasks/'+ deletedTask.t_id);
    }catch(err){
      console.log(err);
    }
  }
// find task matching serach name;
  const[foundTasks, setFoundTask]=useState([]);
  async function onSearchSubmit(searchedItem){
    console.log('search for:', searchedItem);
    try {
      const res = await axios.put('http://localhost:8080/tasks/SearchName/'+ searchedItem.t_name);
      setFoundTask(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  //get overdue tasks 
  const [overDueTasks, setOverDueTasks] = useState([]);
  useEffect( ()=> {
    const fecthOverDueTask = async() =>{
      const result = await axios(
        'http://localhost:8080/OverDue', 
      );
      if (result.fatal) {
        alert('request failed. please restart the server');
        return;
      }
      console.log(result.data);
      setOverDueTasks(result.data);
    } 
    fecthOverDueTask();
  },[]);

  //set the state for different component shown in main section.
  const [page, setPage] = useState('');
  let main;
  switch (page) {
    default:
      main = 
      <>
        <SortButton filters={filters} filterStatus={filterStatus} setStatus={setStatus} />
        <TaskItemList tasks={dateItems.filter(filterTasksByDay).filter(filterTaskByStatus)} 
                      updateTask={updateTask} deleteTask={deleteTask} 
                      listItems={listItems} tagItems={tags} onSubmitEdit={onSubmitEdit} 
                      onClickDeleteTask={onClickDeleteTask}/>          
      </>
      break;
    case 'create':
      main = <CreateTask createTaskPost={createTaskPost} listItems={listItems} tagItems={tags}/>
      break;
    case 'export':
      main = <ExportList listItems={listItems} exportListPost={exportListPost}/>
      break;
    case 'search':
      main = <></>
      break;
    case 'simpleSearch':
      main =  <TasksFound tasks={foundTasks} listItems={listItems} tagItems={tags}
                          onSubmitEdit={onSubmitEdit} onClickDeleteTask={onClickDeleteTask} 
                          deleteTask={deleteTask} updateTask={updateTask} />
      break;
    case 'overdue':
      main = <TasksFound tasks={overDueTasks} listItems={listItems} tagItems={tags}
              onSubmitEdit={onSubmitEdit} onClickDeleteTask={onClickDeleteTask} deleteTask={deleteTask} updateTask={updateTask} />
      break;  
  }

  return (
    <>
      {/* nav bar element in header */}
      <Navbar bg="dark" variant="dark" expand="lg" className="head">
        <CurrentDate />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Menu setPage={setPage}  />
          </Nav>  
          <SimpleSearch onSearchSubmit={onSearchSubmit} setPage={setPage}   />
        </Navbar.Collapse>
      </Navbar>
      {/* sidebar elements. */}
      <div className="sidebar border-right border-success pr-2">
        {/* upcoming task section  */}
        <div className="upcoming">
          <UpcomingTask />
          <FiveDays fiveDays={fiveDays} setPage={setPage} overDueTasks={overDueTasks} currentDay={currentDay} setCurrentDay={setCurrentDay} tasks={dateItems}/>
        </div>
        {/* list section */}
        <div className="list">
          {/* below add a new list item into the existing list array */}
          <List />
          {/* below is the add btn for a new list */}
          <AddListName addListItem={addListItem} />
          <div className="listSection">
            <ListItems items={listItems} updateListItems={updateListItems}
                        onSubmitEditListItem={onSubmitEditListItem} onDeleteListItem={onDeleteListItem}
                        deleteList={deleteList}/>
          </div>
        </div>
        {/* tag section */}
        <div className="tag">
          <Tag />
          <AddTagName addTagItem={addTagItem} />
          <div className="tagSection">
            <TagItems tagItems={tags}  updateTag={updateTag} onSubmitEditTag={onSubmitEditTag}
                      onDeleteTagItem={onDeleteTagItem} deleteTag={deleteTag} />
          </div>
          
        </div>
      </div>

      {/* main section element */}
      <div className="main float-center">
        {/* check the 'main' variable status in javascript */}
       
        { main }
       
        
      </div>
    </>
  );
}

export default App;
