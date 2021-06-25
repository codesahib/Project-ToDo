import React from 'react'
import './TaskContainer.css'

export default function TaskContainer(props) {
    let buttonAddTaskStyle= {
        display: "flex",
        "width": "fit-content",
        "alignSelf": "center",
    }

    return (
        <div id="taskContainer">
            <button style={buttonAddTaskStyle} id="buttonAddTask" className="btn btn-info">+ Add Task</button>
        </div>
    )
}
