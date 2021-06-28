import React, { useState } from 'react';
import './Project.css'
import ChangeSettings from './Modals/ChangeSettings'
import TaskContainer from './TaskContainer'

export default function Project({project,delete_project}) {
    const [settingModal, setSettingModal] = useState(false);
    const [taskContainer, setTaskContainer] = useState(false);
    const [proj, setProj] = useState(project);

    return (
        <>
        {settingModal && <ChangeSettings show_settings={setSettingModal} project={proj} updateProject={setProj}/> }
        <div id="project">
            <div id="projectSummary">
                <input type="checkbox"></input>
                <h5 id="projectTitle">{proj.title}</h5>
                <div className="projectOptionsList">
                    <i className="fa fa-gear projectOption" onClick={()=>{setSettingModal(true)}}></i>
                    <i className="fa fa-list-alt projectOption"></i>
                    <i className="fa fa-trash projectOption" onClick={()=>{delete_project(proj)}}></i>
                    {
                        taskContainer === false ? <i className="fa fa-chevron-down projectOption" 
                        onClick={
                            ()=>{setTaskContainer(true)}
                        }></i> : <i className="fa fa-chevron-up projectOption"
                        onClick={
                            ()=>{setTaskContainer(false)}
                        }></i>
                    }
                </div>
            </div>
            {taskContainer && <TaskContainer tasks={proj.tasks}/> }
        </div>
        </>
    )
}
