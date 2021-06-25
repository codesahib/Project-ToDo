import React, { useState } from 'react';
import './Project.css'
import ChangeSettings from './Modals/ChangeSettings'
import TaskContainer from './TaskContainer'

export default function Project({project,delete_project}) {
    const [settingModal, setSettingModal] = useState(false);
    const [taskContainer, setTaskContainer] = useState(false);

    return (
        <>
        {settingModal && <ChangeSettings show_settings={setSettingModal} project={project}/> }
        <div id="projectDisplay">
            <input type="checkbox"></input>
            <h5 id="projectTitle">{project.title}</h5>
            <div className="projectOptionsList">
                <i className="fa fa-gear projectOption" onClick={()=>{setSettingModal(true)}}></i>
                <i className="fa fa-list-alt projectOption"></i>
                <i className="fa fa-trash projectOption" onClick={()=>{delete_project(project)}}></i>
                <i className="fa fa-chevron-down projectOption" onClick={()=>{setTaskContainer(!taskContainer)}}></i>
            </div>
        </div>
        {taskContainer && <TaskContainer project={project}/> }
        </>
    )
}
