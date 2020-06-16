import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";

function ExportList(props) {
  var exportTemplate = {}
  
  function onSubmitExportList(e){
    e.preventDefault();
    var data = {  
      subject: exportTemplate.subject.value,
      t_category: exportTemplate.t_category.value,
      email: exportTemplate.email.value,
      message: exportTemplate.message.value
    }
    props.exportListPost(data);
    document.getElementById('exportBtn').innerHTML= 'Sent';

  }

  function cancelBtnClick(e){
    props.setPage('');
    window.location.reload();
  }

  return (
      <Form className="my-1 col-md-8 border border-success rounded text-left mx-auto mt-5" onSubmit={onSubmitExportList}>
      <Form.Group as={Row} controlId="subject" className="mt-3 ">
          <Form.Label column sm={3} >
          Subject
          </Form.Label>
          <Col sm={9}>
          <Form.Control as='input'  type="text" ref={subject => exportTemplate.subject = subject} name="subject" placeholder="Add a subject..." />
          </Col>
      </Form.Group>
      <Form.Group as={Row}  controlId="t_category">
          <Form.Label column sm={3}>
          List
          </Form.Label>
          <Col sm={9}>
          <Form.Control as="select" name="t_category" ref={t_category => exportTemplate.t_category = t_category}  custom>
            {props.listItems.map(i => <option key={i.c_id} value ={i.c_id} >{i.c_name}</option>)}
            </Form.Control>
          </Col>
      </Form.Group>
      <Form.Group as={Row}  controlId="email">
          <Form.Label column sm={3}>
          Email
          </Form.Label>
          <Col sm={9}>
          <Form.Control as='input'type="email" name="email" ref={email => exportTemplate.email = email} placeholder="Enter an email address..."/>
          </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="message" >
        <Form.Label column sm={3} >
        Message
        </Form.Label>
        <Col sm={9}>
          <Form.Control as="textarea" name="message" rows="3" ref={message => exportTemplate.message = message}  placeholder="Add your message here..."/>  
        </Col> 
      </Form.Group>
      <Form.Group as={Row} >
            <Col className="float-right">
            <Button variant="success"type="button" className="float-right mx-0" onClick={cancelBtnClick}>cancel</Button>
            <Button id="exportBtn" variant="success"type="submit" className="float-right mr-2">export</Button>
            </Col>
        </Form.Group>
     
  </Form>
  );
}

export default ExportList;
