import React, { useState } from 'react'
import axios from 'axios'
import './NewTask.css'

export default function NewTask(props) {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");

    const submit = (e) => {
        e.preventDefault(); // Avoid page reload
        if(!title){
            alert("Title is not defined");
            return;
        }
        props.add_task(title,notes);

        /*
        // POST request to add new project to DB
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post("http://localhost:5000/api/v1/projects/add/task/",{
            "project_title": props.project_title,
            "task":{
                title: title,
                notes: notes
            }
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
                    <label htmlFor="title">Task Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="inputTitle" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Task Notes</label>
                    <textarea value={notes} onChange={(e)=>{setNotes(e.target.value)}} className="form-control" id="inputNotes" placeholder="Notes"/>
                </div>
                <div className="form-group" id="buttonContainer">
                    <button type="cancel" className="btn btn-danger formButton" onClick={()=>{props.show_modal(false)}}>Cancel</button>
                    <button type="submit" className="btn btn-primary formButton">Add</button>
                </div>
            </form>
        </div>
        
    )
}
