import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from 'react';



function AddListName(props){
    const [newListName ,setListName] = useState(" ");
    function onChangeListName(e){
        var newList = e.target.value;
        console.log('set list item', newList);
        setListName(newList);
    }
    return (
        <Form className="mx-2" onSubmit={()=> props.addListItem(newListName)}>
            <InputGroup.Append className="my-1" >
            <Form.Control type="text" placeholder="new list name..."  onChange={onChangeListName} inline/>
            <Button variant="success" size="sm" className="ml-1" type="submit" >add</Button>
            </InputGroup.Append>
        </Form>
        );
 
}

export default AddListName;