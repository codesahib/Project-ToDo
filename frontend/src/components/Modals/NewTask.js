import React, { useState } from 'react'
import './NewTask.css'

export default function NewTask(props) {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");

    const submit = (e) => {
        e.preventDefault(); // Avoid page reload
        if(!title || !notes){
            alert("Title or notes are not defined");
            return;
        }
        setTitle(""); setNotes("");
        props.add_task(title,notes);
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
                    <input type="text" value={notes} onChange={(e)=>{setNotes(e.target.value)}} className="form-control" id="inputNotes" placeholder="Notes"/>
                </div>
                <div className="form-group" id="buttonContainer">
                    <button type="cancel" className="btn btn-danger formButton" onClick={()=>{props.show_modal(false)}}>Cancel</button>
                    <button type="submit" className="btn btn-primary formButton">Add</button>
                </div>
            </form>
        </div>
        
    )
}
