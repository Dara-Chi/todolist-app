import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


function TagItem(props){
    return (

       
        <div className="mx-0 my-1">
            <Form className="mx-3">
            <InputGroup>
              <Form.Control key={props.tagItem.g_id} value={props.tagItem.g_name} onClick/>
              <InputGroup.Append>
                
                <Button variant="outline-success"size="sm" type="submit"><span>&#10004;</span></Button>
                <Button variant="outline-danger"size="sm" type="button"><span>&#10008;</span></Button>

              </InputGroup.Append>
            </InputGroup>
          </Form>


        </div>
    
        
    );
  
}

function TagItems(props){

    return (
        <div>
            {props.tagItems.map(tagItem => <TagItem tagItem = {tagItem}/>)}
        </div>
    );
}

export default TagItems;