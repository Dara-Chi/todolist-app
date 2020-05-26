import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";



function ListItem(props){
    return (
        <div className="mx-3 mb-1">
            <Button key={props.listItem.c_id} size="sm" variant="outline-success" block className="mt-1 mx-1">{props.listItem.c_name}</Button>
        </div>
       
    );


}

function ListItems (props) {
    return (
      <div>
        {props.listItems.map(listItem => <ListItem listItem={listItem} />)}
      </div>
    );
  }
  
  export default ListItems;