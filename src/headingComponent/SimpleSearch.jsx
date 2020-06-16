import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SimpleSearch(props) {

  const search = {};
  function onSearch(e){
      e.preventDefault();
      props.setPage("simpleSearch");
      props.setSearchName(search.t_name.value.trim()); 
      var data = {
        t_name: props.searchName
      }
      props.onSearchSubmit(data);
  }

  function onChangeSearch(e){
    var newSearch = e.target.value;
    props.setSearchName(newSearch);
  }
  return (
    <>
      <Form inline onSubmit={onSearch} >
        <Form.Group controlId="t_name" >
          <Form.Label srOnly ></Form.Label>
          <FormControl as='input' ref={name => search.t_name = name} name="t_name" type="text" placeholder="Search by name..." className="mr-sm-2" onChange={onChangeSearch}/>
          <Button variant="success" type="submit" >Search</Button>
        </Form.Group>
      </Form>
    </>   
  );
}

export default SimpleSearch;
