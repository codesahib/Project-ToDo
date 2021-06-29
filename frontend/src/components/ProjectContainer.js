import React from 'react'
import Project from './Project'

import './ProjectContainer.css'

export default function ProjectContainer(props) {
    return (
        <div id="projectContainer">
            { props.projects.length === 0? <h2 id="textNoProjects">No Projects Recorded</h2> : props.projects.map((project)=> {
                return(
                    <Project key={project.id} project={project} delete_project={props.delete_project}/>
                )
            })}
            <button id="buttonAddProject" className="btn btn-info" onClick={() => {props.show_modal(true)}}>+ Add Project</button>
        </div>
    )
}

