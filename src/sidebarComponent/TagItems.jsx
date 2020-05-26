import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


function TagItem(props){
    return (

       
       
        <div className="mx-3 mb-1">
            <Button key={props.tagItem.g_id}  size="sm" variant="outline-success" block className="mt-1 mx-1">{props.tagItem.g_name}</Button>

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