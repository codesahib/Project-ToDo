import React from 'react'
import Project from './Project'

export default function ProjectContainer({projects,delete_project,add_project}) {
    let textNoProjectsStyle = {
        padding: "20px"
    }

    return (
        <div className="container">
            <center>
                { projects.length ===0? <h2 id="textNoProjects" style={textNoProjectsStyle}>No Projects Recorded</h2> :projects.map((project)=> {
                    return(
                        <>
                            <Project project={project} key={project.id} delete_project={delete_project}/>
                            <hr></hr>
                        </>
                    )
                })}
            </center>
            <center>
                <button id="buttonAddProject" className="btn btn-info" onClick={add_project}>+ Add Project</button>
            </center>
        </div>
    )
}

