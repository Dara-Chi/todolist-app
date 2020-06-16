import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditTask from './EditTask';
import moment from 'moment';


function TaskFound (props) {
    //if use click on the task btn, then show the edit component visible or vice versa.
    const[showEditComponent, setEditComponent]=useState(false);
    function clickEdit(){
        setEditComponent(!showEditComponent);
    }
    function onClickDelete(e){
        var data = {
        t_id:props.task.t_id,
    }
    props.onClickDeleteTask(data);
    props.deleteTask(data);
    }
        
    return (
      <>
        <div className="col-2"></div>
        <ButtonGroup className="col-8 px-0" key={props.task.t_id}>
          <Button className="col-11" variant="outline-success" onClick={clickEdit} >
            <Row>
              <Col sm={5} className="text-left">{props.task.t_name}</Col>
              <Col sm={3} className="text-center">{moment(props.task.t_due_date).format('YYYY-MM-DD')}</Col>
              <Col sm={3} className="text-right">{props.task.t_priority}</Col>
            </Row>
          </Button>
          <Button variant="success" className="col-1" onClick={onClickDelete}>
            <Col sm={2}>
            <span >&#10008;</span>
            </Col>
          </Button>
        </ButtonGroup>
        <Row className="mx-0 px-0">
        <div className="my-1 col-2"></div>
        {showEditComponent && <EditTask task={props.task} updateTask={props.updateTask} key={props.task.t_id}
                              listItems={props.listItems} tagItems={props.tagItems} onSubmitEdit={props.onSubmitEdit} />}
       </Row>
      </>
    );
  }
  
  function TasksFound (props) {
   
    return (
      <div className="mt-5 mainSection">
        {props.tasks.map(task => <TaskFound key={task.t_id} task={task} updateTask={props.updateTask} 
                                            listItems={props.listItems} tagItems={props.tagItems}
                                            onSubmitEdit={props.onSubmitEdit} onClickDeleteTask={props.onClickDeleteTask} deleteTask={props.deleteTask}
                                           />)}
      </div>
    );
  }
  
  export default TasksFound;
  