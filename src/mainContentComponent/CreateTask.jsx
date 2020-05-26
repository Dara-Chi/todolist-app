import React from 'react';
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



function CreateTask(props) {

  return (
    <Form className="my-1 col-md-8  border border-success rounded text-left mx-auto mt-5" >
    <Form.Group as={Row} controlId="t_name" className="mt-3">
        <Form.Label column sm={3} >
        Task Name
        </Form.Label>
        <Col sm={9} >
        <Form.Control as='input' name="t_name" type="text" placeholder="task name" />
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_priority">
        <Form.Label column sm={3}>
        Priority
        </Form.Label>
        <Col sm={9}>
            {/* find the oject match the value === props t_td */}
            <Select name="t_priority" />
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_status">
        <Form.Label column sm={3} for>
        Status
        </Form.Label>
        <Col sm={9}>
            <Select  name="t_status"  />
        </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="t_start_date">
        <Form.Label column sm={3} >
        Start Date
        </Form.Label>
        <Col Col={9}>
            <DatePicker/>
        </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="t_due_date" >

        <Form.Label column sm={3} >
        Due Date
        </Form.Label>
        <Col Col={9}>
        <DatePicker/>
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_caregory">
        <Form.Label column sm={3} >
        List/Category
        </Form.Label>
        <Col sm={9}>
            <Form.Control as="select" custom>
                <option selected>Select a list</option>
                <option selected>I don't know</option>
            </Form.Control>
        </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="t_group">
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

    <Form.Group as={Row}  controlId="tc_recurring">
      <Col sm={{ span: 6, offset: 3 }}>
        <Form.Check label="Is it a recurring task?" />
      </Col>
    </Form.Group>
    <Form.Group as={Row}  controlId="tc_frequency">
        <Form.Label column sm={3}>Frequency</Form.Label>
        <Col sm={9}>
          <Form.Control as="select" custom>
              <option selected>DAILY</option>
              <option value="1">WEEKLY</option>
              <option selected>FORTNIGHTLY</option>
              <option selected>MONTHLY</option>
          </Form.Control>
        </Col> 
    </Form.Group>
    <Form.Group as={Row}  controlId="tc_times">
        <Form.Label column sm={3}>repeated times</Form.Label>
        <Col sm={9}>
        <Form.Control as="input" rows="3" placeholder="give a number here..." />  
        </Col> 
    </Form.Group>
    <Form.Group as={Row}  controlId="t_description">
        <Form.Label column sm={3}>Task Description</Form.Label>
        <Col sm={9}>
        <Form.Control as="textarea" rows="3" placeholder="Add your description here..." />  
        </Col> 
    </Form.Group>
    <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
        <Button variant="success"type="submit" className="float-right">save</Button>
        </Col>
    </Form.Group>
</Form> 






    
  );
}

export default CreateTask;
