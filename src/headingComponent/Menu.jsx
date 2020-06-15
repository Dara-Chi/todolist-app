import React from "react";
import Nav from 'react-bootstrap/Nav';

function Menu(props) {
  return (
    <>
      <Nav.Item className="mx-2">
        <Nav.Link active href="" onClick={() => props.setPage('')}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link  href=""onClick={() => props.setPage('create')} >Creating Task</Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link href=""onClick={() => props.setPage('export')} >Exporting List</Nav.Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Nav.Link href="" onClick={() => props.setPage('search')}>Complex Search</Nav.Link>
      </Nav.Item>
    </>
  );
}

export default Menu;

