import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditTask from './EditTask';

function TaskItem (props) {
  //if use click on the task btn, then show the edit component visible or vice versa.
  const[showEditComponent, setEditComponent]=useState(false);
  function clickEdit(){
    setEditComponent(!showEditComponent);
  }
  console.log('TASK:', props.task);

  return (
    <>
      <Button key={props.task.t_id} className="mb-1 col-8" variant="outline-success" onClick={clickEdit} >
        <Row >
          <Col sm={5} className="text-left">{props.task.t_name}</Col>
          <Col sm={4} className="text-center">{new Date(props.task.t_due_date).toLocaleDateString()}</Col>
          <Col sm={3} className="text-right">{props.task.t_priority}</Col>
        </Row>
      </Button>
      <Row className="mx-0 px-0">
        <div className="my-1 col-2"></div>
        {showEditComponent && <EditTask task={props.task} updateTask={props.updateTask} 
                                  listItems={props.listItems} tagItems={props.tagItems} onSubmitEdit={props.onSubmitEdit}/>}
        </Row>
    </>
  );
}

function TaskItemList (props) {
  console.log('tasks:', props.tasks);
  console.log('map?', props.tasks.map);
  return (
    <div>
      {props.tasks.map(task => <TaskItem task={task} listItems={props.listItems} tagItems={props.tagItems} onSubmitEdit={props.onSubmitEdit}/>)}
    </div>
  );
}

export default TaskItemList;
