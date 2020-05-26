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

function ExportList() {
  return (
      <Form className="my-1 col-md-8 border border-success rounded text-left mx-auto mt-5" >
      <Form.Group as={Row} controlId="t_name" className="mt-3 ">
          <Form.Label column sm={3} >
          Subject
          </Form.Label>
          <Col sm={9}>
          <Form.Control as='input'  type="text" placeholder="add a subject..." />
          </Col>
      </Form.Group>
      <Form.Group as={Row}  controlId="t_priority">
          <Form.Label column sm={3}>
          List
          </Form.Label>
          <Col sm={9}>
          <Form.Control as="select" custom>
                <option selected>select a tag</option>
                <option value="1">I don't know</option>
            </Form.Control>
              {/* find the oject match the value === props t_td */}
              {/* <Select options={priorityOptions} name="t_priority" defaultValue={priorityOptions.find(o => o.value === props.task.t_priority)} getOptionValue={getOptionValue} /> */}
          </Col>
      </Form.Group>
      <Form.Group as={Row}  controlId="t_status">
          <Form.Label column sm={3} for>
          Email
          </Form.Label>
          <Col sm={9}>
          <Form.Control as='input'  type="text" placeholder="email to..."/>
          </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="t_start_date">
          <Form.Label column sm={3} >
          Phone
          </Form.Label>
            <Col sm={9}>
            <Form.Control as='input'  type="text" placeholder="send text to..." />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="t_due_date" >
  
            <Form.Label column sm={3} >
            Message
            </Form.Label>
            <Col sm={9}>
              <Form.Control as="textarea" rows="3" placeholder="Add your message here..."/>  
            </Col> 
      </Form.Group>
      <Form.Group as={Row} >
            <Col className="float-right">
            <Button variant="success"type="submit" className="float-right mx-3">cancel</Button>
            <Button variant="success"type="submit" className="float-right mr-0">export</Button>
            </Col>
        </Form.Group>
     
  </Form>
  );
}

export default ExportList;
