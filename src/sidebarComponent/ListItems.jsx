import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";



function ListItem(props){
    return (
        <div className="mx-0 my-1">
          <Form className="mx-3">
            <InputGroup>
              <Form.Control key={props.listItem.c_id} value= {props.listItem.c_name} onClick/>
              <InputGroup.Append>
                
                <Button variant="outline-success" size="sm" type="submit"><span>&#10004;</span></Button>
                <Button variant="outline-danger" size="sm"type="button"><span>	&#10008;</span></Button>

              </InputGroup.Append>
            </InputGroup>
          </Form>
          
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