import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";



function EditTask(){
    return (
        <Form className="my-1 col-8 border border-success rounded text-left">
        <Form.Group as={Row} controlId="" className="mt-2">
            <Form.Label column sm={2}>
            Task Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="text" placeholder="task name" />
            </Col>
        </Form.Group>
       
        <Form.Group as={Row}  controlId="">
            <Form.Label column sm={2}>
            Priority
            </Form.Label>
            <Col sm={4}>
                <Form.Control as="select" custom>
                    <option selected>select a priority</option>
                    <option value="1">HIGH</option>
                    <option value="2">MEDIUM</option>
                    <option value="3">LOW</option>
                </Form.Control>
            </Col>
            <Form.Label column sm={2}>
            Priority
            </Form.Label>
            <Col sm={4}>
                <Form.Control as="select" custom>
                    <option selected>select a status</option>
                    <option value="1">TO START</option>
                    <option value="2">ONGOING</option>
                    <option value="3">DONE</option>
                    <option value="3">OVERDUE</option>
                </Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="">
            <Form.Label column sm={2}>
            Start Date
            </Form.Label>
            <Col Col={4}>

                <DatePicker />
               
           
            </Col>
            <Form.Label column sm={2}>
            Due Date
            </Form.Label>
            <Col Col={4}>
            <DatePicker />
            </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="">
            <Form.Label column sm={2}>
            List/Category
            </Form.Label>
            <Col sm={4}>
                <Form.Control as="select" custom>
                    <option selected>Select a list</option>
                    <option selected>I don't know</option>
                </Form.Control>
            </Col>
            <Form.Label column sm={2}>
            Tag/Group
            </Form.Label>
            <Col sm={4}>
            <Form.Control as="select" custom>
                <option selected>select a tag</option>
                <option value="1">I don't know</option>
            </Form.Control>
            </Col>
        </Form.Group>
        <FormGroup>
            <Form.Label>Task Description</Form.Label>
                
    
    
            <Form.Control as="textarea" rows="3" placeholder="Add your description here..."/>   
        </FormGroup>
        <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="success"type="submit" className="float-right">Sign in</Button>
            </Col>
        </Form.Group>
    </Form>
    );
}


export default EditTask;