import React from 'react'
import Project from './Project'

export default function ProjectContainer({projects,delete_project,show_modal}) {
    let textNoProjectsStyle = {
        padding: "20px"
    }

    let buttonAddProjectStyle= {
        display: "flex",
        "width": "fit-content",
        "align-self": "center",
    }
    return (
        <div className="container" style={{display:"flex", "flex-direction":"column"}}>
            { projects.length ===0? <h2 id="textNoProjects" style={textNoProjectsStyle}>No Projects Recorded</h2> :projects.map((project)=> {
                return(
                    <>
                        <Project project={project} key={project.id} delete_project={delete_project}/>
                        <hr></hr>
                    </>
                )
            })}
            <button style={buttonAddProjectStyle} id="buttonAddProject" className="btn btn-info" onClick={() => {show_modal(true)}}>+ Add Project</button>
        </div>
    )
}

