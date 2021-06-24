import React from 'react'
import './NewProject.css'

export default function NewProject() {
    return (
        <div id="formContainer">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Project Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Title"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Project Description</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Description"/>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
        </div>
        
    )
}
