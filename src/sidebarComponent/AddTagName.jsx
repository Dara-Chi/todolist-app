import React, {useState}from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from 'axios';


function AddTagName(){

    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');

    async function submitList(event){
    event.preventDefault();

    const body = new URLSearchParams(new FormData(event.target)).toString();
    const result = await axios.put(
        'http://localhost:8080/createList?query=${query}',
        body
        );

        if (result.fatal) {
        alert('request failed. please restart the server');
        return;
        }
        console.log(result.data);
    
    
    // fetch('/api/form-submit-url', {
    //   method: 'PUT',
    //   body: data,
    // });

    }


    return (
        <Form className="mx-2 " onSubmit={submitList}>
            <Form.Group controlId="g_name" className="my-1">
                <InputGroup.Append>
                <Form.Control name="g_name" type="text" placeholder="new tag name..." />
                <Button variant="success" size="sm" className="ml-1">add</Button>
                </InputGroup.Append>
            </Form.Group>
        </Form>
            
        );
}

export default AddTagName;

