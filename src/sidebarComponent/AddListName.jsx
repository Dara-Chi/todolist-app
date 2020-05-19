import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AddListName(){
    return (
            <InputGroup.Append className="my-1 mx-3">
                <Form.Control type="text" placeholder="new list name..." inline/>
                <Button variant="success" size="sm" className="mx-1">add</Button>
            </InputGroup.Append>
        );
    
    
}

export default AddListName;