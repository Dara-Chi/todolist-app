import React, { useState } from "react";
import CurrentDate from "./headingComponent/CurrentDate";
import Menu from "./headingComponent/Menu";
import SimpleSearch from "./headingComponent/SimpleSearch";
import UpcomingTask from "./sidebarComponent/UpcomingTask";
import List from "./sidebarComponent/List";
import Tag from "./sidebarComponent/Tag";
import TaskItem from "./mainContentComponent/TaskItem";
import SortButton from "./mainContentComponent/SortButton";
import CreateTask from "./mainContentComponent/CreateTask";
import ExportList from "./mainContentComponent/ExportList";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListItem from './sidebarComponent/ListItem';
import TagItem from './sidebarComponent/TagItem';
import AddTagName from "./sidebarComponent/AddTagName";
import AddListName from './sidebarComponent/AddListName';
import tasks from "./tasks";
import EditTask from "./mainContentComponent/EditTask";


function App () {

  //set the state for different component shown in main section.
  const [page, setPage] = useState('task');
  let main;
  switch (page) {
    default:
      main = 
      <>
        <SortButton />
        <TaskItem/>
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



  

  // set Item array [] state; orgingal state for your reference. 
  const [listItems, setListItems] = useState(["...fsads","dhj","42389fd","hfghf","fseg","ajhgj","trhsef","sgdfg"]);
  //set tag array [] state;
  const [tags, setTags] = useState(["...fsads","dhj","42389fd","hfghf","fseg","ajhgj","trhsef","sgdfg"]);
  //append new list item to old list items. 
  function addListItem(newListItem){
    setListItems([...listItems, newListItem]);
  }
  //append new tag item to old list items. 
  function addTagItem(newTagItem){
    setTags([...tags, newTagItem]);
  }
  // //set task item to EditTask component
  // const [taskFields, setTask]= useState(["Buy Cake", "2-12-2020","HIGH"]);
  // function showEditComponent(fields){
  //   setTask(fields);
  // }


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
          <UpcomingTask setPage={setPage}/>
        </div>

        {/* list section */}
        <div className="list">
          {/* below add a new list item into the existing list array */}
          <List addListItem={addListItem} />
          {/* below is the add btn for a new list */}
          <AddListName />
          <div className="listSection">
            {listItems.map(item => <ListItem item={item} />)}
          </div>
          
        </div>

        {/* tag section */}
        <div className="tag mt-3">
          <Tag addTagItem={addTagItem} />
          <AddTagName />
          <div className="tagSection">
            {tags.map(tag => <TagItem tag={tag} />)}
          </div>
          
        </div>
      </div>

      {/* main section element */}
      <div className="main">
        {/* check the 'main' variable status in javascript */}
        { main }
      </div>
    </>
  );
}

export default App;
