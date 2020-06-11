import React from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";


function EachDate(props){
   
    return (
        <div className="mb-1">
            <Button id={props.eachDay}size="sm" variant="outline-success" block className="mx-1" onClick={() => props.setCurrentDay(props.eachDay)}>{props.eachDay.toLocaleDateString()}
                <span className="float-right">&#x1F534;</span>
               
            </Button>
        </div> 
    );
}

function FiveDays(props){

    return (
        <div className="mx-3">
            {props.fiveDays.map(eachDay => <EachDate eachDay={eachDay} setCurrentDay={props.setCurrentDay}/>)}
        </div>
    );
}

export default FiveDays;