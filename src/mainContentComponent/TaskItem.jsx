import React, { useState } from "react";
import tasks from "../tasks";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditTask from './EditTask';
import Card from 'react-bootstrap/Card'

function TaskItem (props) {
  //if use click on the task btn, then show the edit component visible.
  const[showEditComponent, setEditComponent]=useState(false);
  function clickEdit(){
    setEditComponent(!showEditComponent);
  }

  return (
    <>
      <Button className="my-1 col-8" variant="outline-success" onClick={clickEdit} >
        <Row key={props.task.t_id}>
          <Col lg={8} className="text-left">{props.task.t_name}</Col>
          <Col lg={2} className="text-left">{props.task.t_due_date}</Col>
          <Col lg={2} className="text-left">{props.task.t_priority}</Col>
        </Row>
        
      </Button>
      <Row className="mx-0 px-0">
        <div className="my-1 col-2"></div>
        {showEditComponent && <EditTask task={props.task} />}
        </Row>
      
    </>
  );
}

function TaskItemList () {
  return (
    <div>
      {tasks.map(task => <TaskItem task={task} />)}
    </div>
  );
}

export default TaskItemList;
