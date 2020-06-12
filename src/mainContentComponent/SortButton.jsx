import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


function SortButton(props) {
  return (
    <Row>
      <div className="col-2"></div>
      <ButtonGroup className="sortBtn my-5 col-8">
        {props.filters.map(filter => <Button variant="success" key={filter.value} className="border border-dark" onClick={()=> props.setStatus(filter)}>{filter.title}</Button>)}
      </ButtonGroup>
    </Row>
    
  );
}

export default SortButton;
