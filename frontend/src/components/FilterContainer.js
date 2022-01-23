import React from 'react'
import ProjectFilter from '../components/ProjectFilter'

import './FilterContainer.css'

export default function FilterContainer() {
    return (
        <div id="filterContainer">
            <ProjectFilter name="Yearly" onClick={()=>{console.log("clicked")}}/>
            <ProjectFilter name="Termly"/>
            <ProjectFilter name="Monthly"/>
            <ProjectFilter name="Weekly"/>
        </div>
    )
}
