import React from 'react'
import Task from './Task'
import './TaskContainer.css'

export default function TaskContainer(props) {
    let buttonAddTaskStyle= {
        display: "flex",
        "width": "fit-content",
        "alignSelf": "center",
    }

    return (
        <div id="taskContainer">
            {
                props.tasks.length === 0 ? <h2 id="textNoTasks">No Tasks Recorded</h2> : props.tasks.map((task) => {
                    return(
                        <Task key={task._id} task={task} delete_task={props.delete_task}/>
                    )
                })
            }
            <button style={buttonAddTaskStyle} id="buttonAddTask" className="btn btn-info" onClick={()=>{props.show_modal(true)}}>+ Add Task</button>
        </div>
    )
}
