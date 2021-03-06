import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import moment from 'moment';

function CreateTask(props) {
   
    const [selectedStartDate, setStartDate]=useState(new Date());
    const [selectedDueDate, setDueDate]= useState(selectedStartDate);
    const [showRecurringInputs, setRecurringInputs]=useState(false);
    const [requireRepeatedTimes, setRepeatedTimes]=useState(false);
    
  

    function showRecurringTask(){
        var recurring = setRecurringInputs(!showRecurringInputs);
        setRepeatedTimes(true);
        return recurring;
    }

    const task = {};
    function onSubmitCreateTask (e) {
        e.preventDefault();
        var data = {
            t_name: task.t_name.value,
            t_priority: Number(task.t_priority.value),
            t_category: task.t_category.value,
            t_status: Number(task.t_status.value),
            t_start_date: moment(selectedStartDate).format('YYYY-MM-DD'),
            t_due_date: moment(selectedDueDate).format('YYYY-MM-DD'),
            t_category: Number(task.t_category.value),
            t_group: Number(task.t_group.value),
            tc_recurring: showRecurringInputs? 1: 0,
            tc_frequency: task.tc_frequency ? task.tc_frequency.value : 'daily',
            tc_times: task.tc_times ? task.tc_times.value : 1,
            t_description: task.t_description.value,
        }
        props.createTaskPost(data);
        
    }

    return (
    <Form className="my-1 col-md-8  border border-success rounded text-left mx-auto mt-5" onSubmit={onSubmitCreateTask}>
    <Form.Group as={Row} controlId="t_name" className="mt-3">
        <Form.Label column sm={3} >
        Task Name
        </Form.Label>
        <Col sm={9} >
            <Form.Control required as='input' name="t_name" type="text" ref={name => task.t_name = name} placeholder="Give a task name..." />
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_priority">
        <Form.Label column sm={3}>
        Priority
        </Form.Label>
        <Col sm={9}>
            {/* find the object match the value === props t_td */}
            <Form.Control as="select" name="t_priority" ref={priority => task.t_priority = priority} custom required> 
                <option value="" >Select one--</option>
                <option value="3">Low</option>
                <option value="2">Medium</option>
                <option value="1">High</option>
            </Form.Control>
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_status">
        <Form.Label column sm={3}>
        Status
        </Form.Label>
        <Col sm={9}>
            <Form.Control as="select" name="t_status" ref={status => task.t_status = status}  custom required>
                <option value="" >Select one--</option>
                <option value="1">To Start</option>
                <option value="2">Ongoing</option>
                <option value="3">Done</option>
                <option value="4">Overdue</option>
            </Form.Control>
        </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="t_start_date">
        <Form.Label column sm={3} >
        Start Date
        </Form.Label>
        <Col Col={9}>
            <DatePicker 
                name="t_start_date" 
                selected={selectedStartDate}
                onChange={date => setStartDate(date)} 
                minDate={new Date()}
            />
        </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="t_due_date" >
        <Form.Label column sm={3} >
        Due Date
        </Form.Label>
        <Col Col={9}>
        <DatePicker 
            name="t_due_date"
            selected={selectedDueDate}
            onChange={date => setDueDate(date)}
            minDate={selectedStartDate}
            />
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_category">
        <Form.Label column sm={3} >
        List/Category
        </Form.Label>
        <Col sm={9}>
            <Form.Control placeholder="Please add a list"as="select" name="t_category" ref={list => task.t_category = list} custom required>
                <option value="" >Select one--</option>
                {props.listItems.map(i => <option key={i.c_id}  value ={i.c_id}>{i.c_name}</option>)}
            </Form.Control>
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_group">
        <Form.Label column sm={3}>
        Tag/Group
        </Form.Label>
        <Col sm={9}>
        <Form.Control as="select" name="t_group" custom  ref={tag => task.t_group = tag} required>
            <option value="">Select one--</option>
            {props.tagItems.map(i => <option key={i.g_id} value={i.g_id} >{i.g_name}</option>)}
        </Form.Control>
        </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="tc_recurreg">
        <Col sm={{ span: 6, offset: 3 }}>
            <Form.Check type="checkbox" label="Is it a recurring task?" name="tc_recurring" onChange={()=>showRecurringTask()}/>
        </Col>
    </Form.Group>
    {showRecurringInputs && 
    <>
        <Form.Group as={Row}  controlId="tc_frequency"  >
            <Form.Label column sm={3}>Frequency</Form.Label>
            <Col sm={9}>
            <Form.Control as="select" name="tc_frequency" ref={tc_frequency => task.tc_frequency = tc_frequency} custom required>
                <option value="" >Select one--</option>
                <option value="daily" >Daily</option>
                <option value="weekly">Weekly</option>
                <option value="fortnightly">Fortnightly</option>
                <option value="monthly">Monthly</option>
            </Form.Control>
            </Col> 
        </Form.Group>
        <Form.Group as={Row}  controlId="tc_times">
            <Form.Label column sm={3}>repeated times</Form.Label>
            <Col sm={9}>
            <Form.Control id="times" as="input" rows="3"  ref={times => task.tc_times = times} required={requireRepeatedTimes}/>  
            </Col> 
        </Form.Group>
        </>}
    <Form.Group as={Row}  controlId="t_description">
                <Form.Label column sm={3}>Task Description</Form.Label>
                <Col sm={9}>
                <Form.Control as="textarea" rows="3" name="t_description" ref={desc => task.t_description = desc} placeholder="Add your description here..." />  
                </Col> 
            </Form.Group>
    <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
        <Button id="createSaveBtn"variant="success"type="submit" className="float-right">save</Button>
        </Col>
    </Form.Group>
</Form> 
  );
}

export default CreateTask;
