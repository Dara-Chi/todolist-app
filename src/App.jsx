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

function App () {


  //updating date component if data is updated/inserted new/deleted
  //fetch data when the component mounts.Providing an empty array as second argument... 
  //to the effect hook to avoid activating it on component updates but only for the mounting of the component.
  const [dateItems, setDateItems] = useState([]);

  

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/tasks', 
      );

      if (result.fatal) {
        alert('request failed. please restart the server');
        return;
      }
      setDateItems(result.data);
    };
 
    fetchData();
  }, []);

  function addTask (newTask) {
    setDateItems([...dateItems, newTask]);
  }

  function updateTask (updatedTask) {
    setDateItems(dateItems.map(task => task.t_id === updatedTask.t_id ? updatedTask : task));
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

  //set tag array [] state;
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

  //get how many "count" days.
  function getDays (count) {
    const today = new Date();
    return Array.from(new Array(count), (_, i) => {
      return new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    });
  }

  function dayListing () {
    return getDays(5);
  }
 
  //set five days for Upcoming task
  const [fiveDays, setFiveDays] = useState(dayListing());

  console.log('five days?', fiveDays[0], fiveDays);
  const [currentDay, setCurrentDay] = useState(fiveDays[0]);

  function filterTasksByDay (task) {
    const taskDueDate = new Date(task.t_due_date);
    return taskDueDate.valueOf() === currentDay.valueOf();
  }

  // 1:to_start 2:ongoing 3:done 4:overdue
  const filters = [
    { value: 0, title: 'All' },
    { value: 1, title: 'To Start' },
    { value: 2, title: 'Ongoing' },
    { value: 3, title: 'Done' },
    { value: 4, title: 'Overdue' }

  ];
  const [filterStatus, setStatus] = useState(0);
  
  function filterTaskByStatus (task){
    if (filterStatus === 0) return true;
    const taskStatus = task.t_status;
    return taskStatus === filterStatus;
  }

  //set the state for different component shown in main section.
  const [page, setPage] = useState('');
  let main;
  switch (page) {
    default:
      main = 
      <>
        <SortButton filters={filters} filterStatus={filterStatus} setStatus={setStatus} />
        <TaskItemList tasks={dateItems.filter(filterTasksByDay).filter(filterTaskByStatus)} updateTask={updateTask} />          
      </>
      break;
    case 'create':
      main = <CreateTask />
      break;
    case 'export':
      main = <ExportList />
      break;
    case 'search':
      main = <></>
      break;
  }
  
  //append new list item to old list items. 
  function addListItem(newListItem){
    setListItems([...listItems, newListItem]);
  }
  //append new tag item to old list items. 
  function addTagItem(newTagItem){
    setTags([...tags, newTagItem]);
  }
  
 
  return (
    <>
      {/* nav bar element in header */}
      <Navbar bg="dark" variant="dark" expand="lg" className="head">
        <CurrentDate />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Menu setPage={setPage}  />
          </Nav>  
          <SimpleSearch />
        </Navbar.Collapse>
      </Navbar>

      {/* sidebar elements. */}
      <div className="sidebar border-right border-success pr-2">

        {/* upcoming task section  */}
        <div className="upcoming">
        {/* setPage={setPage}  */}
          <UpcomingTask />
          <FiveDays fiveDays={fiveDays} setCurrentDay={setCurrentDay} />
        </div>

        {/* list section */}
        <div className="list">
          {/* below add a new list item into the existing list array */}
          <List addListItem={addListItem} />
          {/* below is the add btn for a new list */}
          <AddListName />
          <div className="listSection">
            <ListItems listItems={listItems} />
          </div>
          
        </div>

        {/* tag section */}
        <div className="tag mt-3">
          <Tag addTagItem={addTagItem} />
          <AddTagName />
          <div className="tagSection">
            <TagItems tagItems={tags} />
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
