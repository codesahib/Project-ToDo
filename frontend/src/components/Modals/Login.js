import React, { useState } from 'react'
import './Login.css'

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = () =>{
        console.log("submit button clicked")
    }

    return (
        <div id="formContainer">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" id="inputUsername" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <h6><a href="#">Forgot password</a></h6>
                <div className="form-group" id="buttonContainer">
                    <button type="cancel" className="btn btn-danger formButton" onClick={()=>{props.show_modal(false)}}>Cancel</button>
                    <button type="submit" className="btn btn-primary formButton">Sign in</button>
                </div>
                <h4>New User? <a href="#" style={{"textDecoration":"underline"}}>Sign up</a></h4>
            </form>
        </div>
    )
}
