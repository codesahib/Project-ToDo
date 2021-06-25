import React from 'react'
import Project from './Project'

export default function ProjectContainer(props) {
    let textNoProjectsStyle = {
        "padding": "20px",
        "text-align": "center"
    }

    let buttonAddProjectStyle= {
        display: "flex",
        "width": "fit-content",
        "alignSelf": "center",
    }
    return (
        <div className="container" style={{display:"flex", "flexDirection":"column"}}>
            { props.projects.length ===0? <h2 id="textNoProjects" style={textNoProjectsStyle}>No Projects Recorded</h2> : props.projects.map((project)=> {
                return(
                    <>
                        <Project project={project} key={project.id} delete_project={props.delete_project}/>
                        <hr></hr>
                    </>
                )
            })}
            <button style={buttonAddProjectStyle} id="buttonAddProject" className="btn btn-info" onClick={() => {props.show_modal(true)}}>+ Add Project</button>
        </div>
    )
}

