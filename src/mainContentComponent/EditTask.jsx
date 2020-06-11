import React from 'react';
import moment from 'moment';
import axios from 'axios';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import { useState } from 'react';

function EditTask(props){
    
    const [selectedStartDate, setStartDate]= useState(new Date(props.task.t_start_date));
    const [selectedDueDate, setDueDate] = useState(new Date(props.task.t_due_date));
    const [selectedPriority, setSelectPriority] = useState(props.task.t_priority);
    const [selecedStatus, setStatus] = useState(props.task.t_status);
    const[name, setName] = useState(props.task.t_name);
    function onChangeName(e){
        var t_name = e.target.value;
        setName(t_name);
    }

    const[description, setDescription]=useState(props.task.t_description);
    function onChangeDescription(e){
        var t_description = e.target.value;
        setDescription(t_description);
    }

    const task = {};
    function onSubmitEditTask (e) {
        e.preventDefault();
        console.log('event?', e);
        var data = {
            t_id:props.task.t_id,
            t_name: name,
            t_priority: task.t_priority.value,
            t_status: task.t_status.value,
            t_start_date: moment(selectedStartDate).format('YYYY-MM-DD'),
            t_due_date: moment(selectedDueDate).format('YYYY-MM-DD'),
            t_category: task.t_category.value,
            t_group: task.t_group.value,
            t_description: description
        }
        props.onSubmitEdit(data);
        props.updateTask(data);
    }
    return (
        <Form className="my-1 col-8 border border-success rounded text-left" onSubmit={onSubmitEditTask}>
        <Form.Group as={Row} controlId="t_name" className="mt-2">
            <Form.Label column sm={3} >
            Task Name
            </Form.Label>
            <Col sm={9}>
                <Form.Control as='input' name="t_name" type="text" placeholder="task name" value={name} onChange={onChangeName}/>
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="t_priority">
            <Form.Label column sm={3}>
            Priority
            </Form.Label>
            <Col sm={9}>
            <Form.Control as="select" name="t_priority" defaultValue={selectedPriority} ref={priority => task.t_priority = priority} custom>
                <option value="3">Low</option>
                <option value="2">Medium</option>
                <option value="1">High</option>
            </Form.Control>
            </Col>
           
        </Form.Group>
        <Form.Group as={Row}  controlId="t_status">
            <Form.Label column sm={3} for>
            Status
            </Form.Label>
            <Col sm={9}>
            <Form.Control as="select" name="t_status" defaultValue={selecedStatus} ref={status => task.t_status = status}  custom>
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
                selected={selectedStartDate}
                name="t_start_date"
                onChange={date => setStartDate(date)} />
            </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="t_due_date" >
    
            <Form.Label column sm={3} >
            Due Date
            </Form.Label>
            <Col Col={9}>
            <DatePicker
                selected={selectedDueDate}
                onChange={date => setDueDate(date)} />
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="t_caregory">
            <Form.Label column sm={3} >
            List/Category
            </Form.Label>
            <Col sm={9}>
                <Form.Control as="select" name="t_category" defaultValue={props.task.t_category} ref={list => task.t_category = list}  custom>
                    {props.listItems.map(i => <option key={i.c_id} value={i.c_id}>{i.c_name}</option>)}
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="t_group">
            <Form.Label column sm={3}>
            Tag/Group
            </Form.Label>
            <Col sm={9}>
            <Form.Control as="select" name="t_group" custom defaultValue={props.task.t_group} ref={tag => task.t_group = tag}>
                {props.tagItems.map(i => <option key={i.g_id} value ={i.g_id}>{i.g_name}</option>)}
            </Form.Control>
            </Col>
        </Form.Group>
        <FormGroup as={Row}  controlId="t_description">
            <Form.Label column sm={3}>Task Description</Form.Label>
            <Col sm={9}>
            <Form.Control as="textarea" rows="3" placeholder="Add your description here..." value={description} onChange={onChangeDescription} onChange={onChangeDescription}/>  
            </Col> 
        </FormGroup>
        <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="success"type="submit" className="float-right">save</Button>
            </Col>
        </Form.Group>
    </Form>
    );
}


export default EditTask;