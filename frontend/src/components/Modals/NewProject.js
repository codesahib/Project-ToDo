import React, { useState } from 'react'
import axios from 'axios'
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
        setTitle(""); setDesc("");
        props.add_project(title,desc);

        /*
        // POST request to add new project to DB
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post("http://localhost:5000/api/v1/projects/create/",{
            title: title,
            description: desc
        },axiosConfig)
        .then((res) => {
            console.log("[REACT] Data added successfully")
        })
        .catch((e)=>{
            console.log(`Axios error: ${e}`)
        })
        */
    } 

    return (
        <div id="formContainer">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="inputTitle" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Project Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="inputDescription" placeholder="Description"/>
                </div>
                <div className="form-group" id="buttonContainer">
                    <button type="cancel" className="btn btn-danger formButton" onClick={()=>{props.show_modal(false)}}>Cancel</button>
                    <button type="submit" className="btn btn-primary formButton">Add</button>
                </div>
            </form>
        </div>
        
    )
}
