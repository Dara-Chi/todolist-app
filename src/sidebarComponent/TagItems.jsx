import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";



function TagItem(props){
    const[tagName,setTagName]=useState(props.tagItem.g_name);
    function onChangeTagName(e){
        var newTagName = e.target.value;
        setTagName(newTagName);
    }

    function onClickEditTagName(updatedTag){
      var data = { 
        g_id:props.tagItem.g_id,
        g_name: tagName
      }
      props.onSubmitEditTag(data);
      props.updateTag(data);
    }

    function onDeleteTag(deletedTag){
      var data ={
        g_id:props.tagItem.g_id,
        g_name:tagName
      }
      props.onDeleteTagItem(data);
      props.deleteTag(data);
    }


    return (
        
            <Form className="mx-3 my-1" >
            <InputGroup>
              <Form.Control as='input' name="c_name" type="text" key={props.tagItem.g_id} id={props.tagItem.g_id} defaultValue={props.tagItem.g_name} onChange={onChangeTagName}/>
              <InputGroup.Append>
                <Button variant="outline-success"size="sm" type="button" key={props.tagItem.g_id} onClick={onClickEditTagName}><span>&#10004;</span></Button>
                <Button variant="outline-danger"size="sm" type="button" onClick={onDeleteTag}><span>&#10008;</span></Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        
    );
  
}

function TagItems(props){

    return (
        <div>
            {props.tagItems.map(tagItem => <TagItem tagItem = {tagItem} 
                                                    onSubmitEditTag={props.onSubmitEditTag} 
                                                    updateTag={props.updateTag}
                                                    onDeleteTagItem={props.onDeleteTagItem}
                                                    deleteTag={props.deleteTag}/>)}
        </div>
    );
}

export default TagItems;