import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


function SortButton(props) {
  function isSelectedFilter (filter) {
    return filter.value === props.filterStatus ? 'active' : '';
  }

  return (
    <Row >
      <div className="col-1"></div>
      <ButtonGroup className="mt-5 col-10 ">
        {props.filters.map(filter => <Button className={isSelectedFilter(filter)} variant="outline-success" key={filter.value} filterStatus={props.filterStatus} onClick={()=> props.setStatus(filter.value)}>{filter.title}</Button>)}
      </ButtonGroup>
      <div className="col-1"></div>
    </Row>
    
  );
}

export default SortButton;
