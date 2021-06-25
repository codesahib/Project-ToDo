import React, { useState } from 'react';

export default function ChangeSettings(props) {
    const thisProject = props.project;
    const [thisTitle, setThisTitle] = useState(thisProject.title);
    
    const submit = (e) => {
        e.preventDefault(); // Avoid page reload
        thisProject.title = thisTitle;
        props.show_settings(false)
    }

    return (
        <div id="formContainer">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="description">Change Title</label>
                    <input type="text" value={thisTitle} onChange={(e)=>{setThisTitle(e.target.value)}} className="form-control" id="inputDescription" placeholder="Description"/>
                </div>
                <div className="form-group" id="buttonContainer">
                    <button type="cancel" className="btn btn-danger formButton" onClick={()=>{props.show_settings(false)}}>Cancel</button>
                    <button type="submit" className="btn btn-primary formButton">Change</button>
                </div>
            </form>
        </div>
        
    )
}
