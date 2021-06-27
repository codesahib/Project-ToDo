import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Project-ToDo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/codesahib/Project-ToDo/tree/master/frontend" target="_blank">GitHub Repo <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    &nbsp;&nbsp;
                    <button className="btn btn-info my-2 my-sm-0">Login</button>
                </div>
                </nav>
        </div>
    )
}
