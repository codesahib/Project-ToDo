import React, { useState } from 'react';

export default function ChangeSettings(props) {
    const thisProject = props.project;
    const [thisTitle, setThisTitle] = useState(thisProject.title);
    const [thisDesc, setThisDesc] = useState(thisProject.description);
    
    const submit = (e) => {
        e.preventDefault(); // Avoid page reload
        thisProject.title = thisTitle;
        thisProject.description = thisDesc;
        props.updateProject(thisProject);
        props.show_settings(false)
    }

    return (
        <div id="formContainer">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Change Title</label>
                    <input type="text" value={thisTitle} onChange={(e)=>{setThisTitle(e.target.value)}} className="form-control" id="inputTitle" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Change Description</label>
                    <input type="text" value={thisDesc} onChange={(e)=>{setThisDesc(e.target.value)}} className="form-control" id="inputDescription" placeholder="Description"/>
                </div>
                <div className="form-group" id="buttonContainer">
                    <button type="cancel" className="btn btn-danger formButton" onClick={()=>{props.show_settings(false)}}>Cancel</button>
                    <button type="submit" className="btn btn-primary formButton">Change</button>
                </div>
            </form>
        </div>
        
    )
}
