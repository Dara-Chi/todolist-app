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
  
  
  //fetch list items from databse
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


  //get five dates from today and return an array of 5 dates
  function dayListing()
  {
  var today = new Date();
  var today1 = new Date();
  var today2 = new Date();
  var today3 = new Date();
  var today4 = new Date();
  var today5 = new Date();
  var today6 = new Date();
  
  var dd = today.getDate();
  var d1 = today.getDate() + 1;
  var d2 = today.getDate() + 2;
  var d3 = today.getDate() + 3;
  var d4 = today.getDate() + 4;
  var d5 = today.getDate() + 5;
  var d6 = today.getDate() + 6;
  
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  
  if((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11))
  {
      if(d1>30)
      {
          d1 = 1;
      }
      if(d2>30)
      {
          d2 = d2-30;
      }
      if(d3>30)
      {
          d3 = d3-30;
      }
      if(d4>30)
      {
          d4 = d4-30;
      }
      if(d5>30)
      {
          d5 = d5-30;
      }
      if(d6>30)
      {
          d6 = d6-30;
      }
  
  }
  
  if((mm == 1) || (mm == 3) || (mm == 5) || (mm == 7) || (mm == 8) || (mm == 10) || (mm == 12))
  {
      if(d1>31)
      {
          d1 = 1;
      }
      if(d2>31)
      {
          d2 = d2-31;
      }
      if(d3>31)
      {
          d3 = d3-31;
      }
      if(d4>31)
      {
          d4 = d4-31;
      }
      if(d5>31)
      {
          d5 = d5-31;
      }
      if(d6>31)
      {
          d6 = d6-31;
      }
  
  }
  
  
  today = mm+'-'+dd+'-'+yyyy;
  today1 = mm+'-'+(d1)+'-'+yyyy;
  today2 = mm+'-'+(d2)+'-'+yyyy;
  today3 = mm+'-'+(d3)+'-'+yyyy;
  today4 = mm+'-'+(d4)+'-'+yyyy;
  
  //2020-04-28 00:00:00
  console.log(today);
  console.log(today1);
  console.log(today2);
  console.log(today3);
  console.log(today4);
  console.log(today5);
  console.log(today6);
  
  return [today, today1, today2, today3, today4];
  }

  //set five days for Upcoming task
  const [fiveDays, setFiveDays] = useState(dayListing());







  //set the state for different component shown in main section.
  const [page, setPage] = useState('');
  let main;
  switch (page) {
    default:
      main = 
      <>
        <SortButton />
        <TaskItemList tasks={dateItems} updateTask={updateTask} />          
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
          <FiveDays fiveDays={fiveDays}/>
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
