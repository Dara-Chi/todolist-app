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

        <Form className="mx-3" onSubmit={()=> props.addListItem(newListName)}>
            <InputGroup>
                <Form.Control type="text" placeholder="new list name..."  onChange={onChangeListName}/>
                <InputGroup.Append>
                    <Button variant="success" size="sm" className="ml-1" type="submit" >add</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
        );
 
}

export default AddListName;