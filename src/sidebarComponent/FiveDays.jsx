import React from "react";
import Button from "react-bootstrap/Button";



function EachDate(props){
    return (
        <div className="mx-3 mb-1">
            <Button size="sm" variant="outline-success" block className="mt-1 mx-1">{props.eachDay}</Button>
        </div>
       
    );


}

function FiveDays(props){

    return (
        <div>
            {props.fiveDays.map(eachDay => <EachDate eachDay={eachDay} />)}
        </div>
    );
}

export default FiveDays;