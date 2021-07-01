import React, { useState } from 'react';
import './TaskNotes.css'

export default function ChangeSettings(props) {
    const [notes, setNotes] = useState(props.notes);
    
    const submit = (e) => {
        e.preventDefault(); // Avoid page reload
        props.update_notes(notes);
        props.show_notes(false)
    }

    return (
        <div id="formContainer">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="notes">Task Notes</label>
                    <textarea className="form-control inputNotes" placeholder="Notes" rows="4" cols="50" value={notes} onChange={(e)=>{setNotes(e.target.value)}}></textarea>
                </div>
                <div className="form-group" id="buttonContainer">
                    <button type="cancel" className="btn btn-danger formButton" onClick={()=>{props.show_notes(false)}}>Cancel</button>
                    <button type="submit" className="btn btn-primary formButton">Update</button>
                </div>
            </form>
        </div>
        
    )
}
