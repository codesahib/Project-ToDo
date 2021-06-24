import React, { useState } from 'react'
import './NewProject.css'

export default function NewProject(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault(); // Avoid page reload
        if(!title || !desc){
            alert("Title or description is not defined");
            return;
        }
        props.add_project(title,desc);
    } 

    return (
        <div id="formContainer" className="container">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="inputTitle" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Project Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="inputDescription" placeholder="Description"/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
        
    )
}
