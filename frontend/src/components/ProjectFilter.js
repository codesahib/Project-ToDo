import React from 'react'

import './ProjectFilter.css'

export default function ProjectFilter({name,onClick}) {
    return (
        <div className="project-filter" onClick={onClick}>
            <h1 className="project-filter-title">{name}</h1>
        </div>
    )
}
