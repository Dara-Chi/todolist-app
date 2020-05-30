import React from "react";
import Button from "react-bootstrap/Button";




function EachDate(props){
   
    return (
        <div className="mx-3 mb-1">
            <Button id={props.eachDay}size="sm" variant="outline-success" block className="mt-1 mx-1" onClick={() => props.setCurrentDay(props.eachDay)}>{props.eachDay.toLocaleDateString()}</Button>
        </div> 
    );
}

function FiveDays(props){

    return (
        <div>
            {props.fiveDays.map(eachDay => <EachDate eachDay={eachDay} setCurrentDay={props.setCurrentDay} />)}
        </div>
    );
}

export default FiveDays;