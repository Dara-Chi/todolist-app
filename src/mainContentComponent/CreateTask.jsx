import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";


function CreateTask() {
  return (
    <Form className="mx-5 my-5">
    <Form.Group as={Row} controlId="">
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
    <Col sm={4}>
    <DatePicker />
    </Col>
    <Form.Label column sm={2}>
      Due Date
    </Form.Label>
    <Col sm={4}>
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


    <Form.Group as={Row}>
      <Form.Label type="check" column sm={2}>
        Recurring Task
      </Form.Label>

     
    </Form.Group>


  
    <Form.Group as={Row} controlId="">
      <Col sm={{ span: 10, offset: 2 }}>
        <Form.Check label="Recurring Task" />
      </Col>
    </Form.Group>

    <Form.Group as={Row}>
      <Col sm={{ span: 10, offset: 2 }}>
        <Button variant="success"type="submit">Sign in</Button>
      </Col>
    </Form.Group>
  </Form>
  );
}

export default CreateTask;
