import React, { useState } from 'react';
import './Project.css'
import ChangeSettings from './Modals/ChangeSettings'

export default function Project({project,delete_project}) {
    const [settingModal, setSettingModal] = useState(false);

    const change_desc = (project) => {
        setSettingModal(true);
    }
    return (
        <>
        {settingModal && <ChangeSettings show_settings={setSettingModal} project={project}/> }
        <div className="containerMain">
            <input type="checkbox"></input>
            <h5 id="projectTitle">{project.title}</h5>
            <div className="projectOptionsList">
                <i className="fa fa-gear projectOption" onClick={()=>{change_desc(project)}}></i>
                <i className="fa fa-list-alt projectOption"></i>
                <i className="fa fa-trash projectOption" onClick={()=>{delete_project(project)}}></i>
                <i className="fa fa-chevron-down projectOption"></i>
            </div>
        </div>
        </>
    )
}
