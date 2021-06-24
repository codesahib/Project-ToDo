import React from 'react'
import Project from './Project'

export default function ProjectContainer({projects,delete_project,add_project}) {
    return (
        <div>
            <center>
                {projects.map((project)=> {
                    return(
                        <Project project={project} delete_project={delete_project}/>
                    )
                })}
            </center>
            <center>
                <button id="buttonAddProject" className="btn btn-info" onClick={add_project}>+ Add Project</button>
            </center>
        </div>
    )
}

