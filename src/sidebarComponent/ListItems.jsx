import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";



function ListItem(props){

  const[listName, setListName]=useState(props.listItem.c_name);
  function onChangeList(e){
    var newName= e.target.value;
    setListName(newName);

  }

  // const list = {};
  function onSubmitEditList (e) {
      console.log('event?', e);
      var data = {
          c_id:props.listItem.c_id,
          c_name: listName
      }
      props.onSubmitEditListItem(data);
      props.updateListItems(data);
    
  
  }
    return (
          <Form className="mx-3 my-1" key={props.listItem.c_id} >
            <InputGroup>
              <Form.Control as='input' name="c_name" type="text" key={props.listItem.c_id} value={listName} defaultValue={props.listItem.c_name} onChange={onChangeList}/>
              <InputGroup.Append>
                <Button variant="outline-success" size="sm" type="button" onClick={onSubmitEditList}><span>&#10004;</span></Button>
                <Button variant="outline-danger" size="sm"type="button"><span>&#10008;</span></Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
    );
}

function ListItems (props) {
    return (
      <div>
        {props.listItems.map(listItem => <ListItem listItem={listItem} 
                                            onSubmitEditListItem={props.onSubmitEditListItem} 
                                            updateListItems={props.updateListItems}/>)}
      </div>
    );
  }
  
  export default ListItems;