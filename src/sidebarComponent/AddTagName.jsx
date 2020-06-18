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

    function onSubmitAddTag(e){
        e.preventDefault();
        var data = {g_name: newTagName};
        props.addTagItem(data);

    }
    return (
        <Form className="mx-3 " onSubmit={onSubmitAddTag}>
            <InputGroup controlId="g_name">
                <InputGroup.Append>
                <Form.Control name="g_name" type="text" placeholder="new tag name..." onChange={onChangeTagName} />
                <Button variant="success" size="sm" className="ml-1" type="submit">add</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
            
        );
}

export default AddTagName;

