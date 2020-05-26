import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useState } from 'react';


const [newListName, setListName] = useState("");
function onChangeListName(e){
    var newListName = e.target.value;
    setListName(newListName);



}


function AddListName(props){
    return (
        <Form className="mx-2" >
            <InputGroup.Append className="my-1">
            <Form.Control type="text" placeholder="new list name..." value={newListName} inline/>
            <Button variant="success" size="sm" className="ml-1">add</Button>
            </InputGroup.Append>
        </Form>
        );
    
    
}

export default AddListName;