import React from 'react'
import Task from './Task'
import './TaskContainer.css'

export default function TaskContainer({tasks}) {
    let buttonAddTaskStyle= {
        display: "flex",
        "width": "fit-content",
        "alignSelf": "center",
    }

    return (
        <div id="taskContainer">
            {
                tasks.length === 0 ? <h2>No Tasks Recorded</h2> : tasks.map((task) => {
                    return(
                        <Task task={task}/>
                    )
                })
            }
            <button style={buttonAddTaskStyle} id="buttonAddTask" className="btn btn-info">+ Add Task</button>
        </div>
    )
}
