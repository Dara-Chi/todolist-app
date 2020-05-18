import React from 'react';
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
    
    const [startDate, setStartDate]= useState(new Date(props.task.t_start_date.substr(0, 10)));
    const [dueDate, setDueDate] = useState(new Date(props.task.t_due_date.substr(0,10)));
    const statusOptions = [
        {value:1,label:"TO START"},
        {value:2,label:"ONGOING" },
        {value:3,label:"DONE"},
        {value:4,label:"OVERDUE"}];

    const priorityOptions =[
        {value:7,label:"HIGH"},
        {value:8,label:"MEDIUM" },
        {value:6,label:"LOW"}];
    
    const [selectedPriority, setSelectPriority] = useState(props.task.t_priority);
    
    function getOptionValue (option) {
        console.log('get value for:', option);
        return option.value || option;
    }

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

    return (
        <Form className="my-1 col-8 border border-success rounded text-left" key={props.task.t_id}>
        <Form.Group as={Row} controlId="taskNameID" className="mt-2">
            <Form.Label column sm={3} >
            Task Name
            </Form.Label>
            <Col sm={9}>
            <Form.Control as='input'  type="text" placeholder="task name" value={name} onChange={onChangeName}/>
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="priority">
            <Form.Label column sm={3}>
            Priority
            </Form.Label>
            <Col sm={9}>
                {/* find the oject match the value === props t_td */}
                <Select options={priorityOptions} defaultValue={priorityOptions.find(o => o.value === props.task.t_priority)} getOptionValue={getOptionValue} />
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="taskStatus">
            <Form.Label column sm={3} for>
            Status
            </Form.Label>
            <Col sm={9}>
                <Select options={statusOptions} defaultValue={statusOptions.find(o => o.value === props.task.t_status)} getOptionValue={getOptionValue} />
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="a">
            <Form.Label column sm={3}>
            Start Date
            </Form.Label>
            <Col Col={9}>
                <DatePicker  
                selected={startDate}
                onChange={date => setStartDate(date)} />
            </Col>
            </Form.Group>
            <Form.Group as={Row}  controlId="b">
    
            <Form.Label column sm={3}>
            Due Date
            </Form.Label>
            <Col Col={9}>
            <DatePicker
                selected={dueDate}
                onChange={date => setDueDate(date)} />
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="c">
            <Form.Label column sm={3}>
            List/Category
            </Form.Label>
            <Col sm={9}>
                <Form.Control as="select" custom>
                    <option selected>Select a list</option>
                    <option selected>I don't know</option>
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="d">
            <Form.Label column sm={3}>
            Tag/Group
            </Form.Label>
            <Col sm={9}>
            <Form.Control as="select" custom>
                <option selected>select a tag</option>
                <option value="1">I don't know</option>
            </Form.Control>
            </Col>
        </Form.Group>

        <FormGroup as={Row}  controlId="e">
            <Form.Label column sm={3}>Task Description</Form.Label>
            <Col sm={9}>
            <Form.Control as="textarea" rows="3" placeholder="Add your description here..." value={description} onChange={onChangeDescription}/>  
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