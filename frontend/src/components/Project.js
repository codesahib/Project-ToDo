import React from 'react'
import './Project.css'

export default function Project({project,delete_project}) {
    return (
        <div className="containerMain">
            <input type="checkbox"></input>
            <h5 id="projectTitle">{project.title}</h5>
            <div className="projectOptionsList">
                <i className="fa fa-gear projectOption"></i>
                <i className="fa fa-list-alt projectOption"></i>
                <i className="fa fa-trash projectOption" onClick={()=>{delete_project(project)}}></i>
                <i className="fa fa-chevron-down projectOption"></i>
            </div>
        </div>
    )
}
