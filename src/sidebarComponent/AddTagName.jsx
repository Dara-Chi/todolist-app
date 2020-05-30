import React, {useState}from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AddTagName(props){
    const [newTagName, setTagName]=useState("");
    function onChangeTagName(e){
        var newTag = e.target.value;
        setTagName(newTag);
     }
   

    return (
        <Form className="mx-2 " onSubmit={()=> props.addTagItem(newTagName)}>
            <Form.Group controlId="g_name" className="my-1">
                <InputGroup.Append>
                <Form.Control name="g_name" type="text" placeholder="new tag name..." onChange={onChangeTagName} />
                <Button variant="success" size="sm" className="ml-1" type="submit">add</Button>
                </InputGroup.Append>
            </Form.Group>
        </Form>
            
        );
}

export default AddTagName;

