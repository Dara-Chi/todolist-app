import React from "react";
import Button from "react-bootstrap/Button";
import getDay from '../utils/get-day';
import moment from 'moment';

function EachDate(props){
    
    function filterTasksByDay (task) {
        const taskDueDate = getDay(new Date(task.t_due_date)); // time
        return taskDueDate.valueOf() === props.eachDay.valueOf();
    }

    function onClickDate(e){
        props.setCurrentDay(props.eachDay);
        props.setPage('');
       
    }

    const showDot = props.tasks.filter(filterTasksByDay).some(t => t.t_status === 1);
    const currentClass = props.eachDay === props.currentDay ? 'active' : '';
    
    return (
        <div className="mb-1 ">
            <Button tasks={props.tasks} className={currentClass} id={props.eachDay} size="sm" variant="outline-success" 
                    block onClick={onClickDate} >{moment(props.eachDay).format('YYYY-MM-DD')}
                { showDot && <span className="float-right">&#x1F534;</span> }
            </Button>
        </div> 
    );
}

function FiveDays(props){
    const showOverDue = props.overDueTasks.some(t => t.t_status ===4);
    
    function onGetOverdue(e){
        e.preventDefault();
        props.setPage("overdue");
    }

    return (
        <div className="mx-3">
            {showOverDue && <Button type="button" className="mb-1 mx-0 float-left " block
                                            size="sm" variant="danger" onClick={onGetOverdue}>OVER DUE</Button>}
            {props.fiveDays.map(eachDay=><EachDate key={eachDay.toString()} setPage={props.setPage}eachDay={eachDay} overDueTasks={props.overDueTasks}
                                                    currentDay={props.currentDay} setCurrentDay={props.setCurrentDay} 
                                                    tasks={props.tasks}/>)}
        </div>
    );
}

export default FiveDays;