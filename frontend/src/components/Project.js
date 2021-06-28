import React, { useState } from 'react';
import './Project.css'
import ChangeProjectSettings from './Modals/ChangeProjectSettings'
import TaskContainer from './TaskContainer'

export default function Project({project,delete_project}) {
    const [settingModal, setSettingModal] = useState(false);
    const [taskContainer, setTaskContainer] = useState(false);
    const [proj, setProj] = useState(project);
    const [tasksList, setTasksList] = useState(project.tasks);

    const delete_task = (task) => {
        setTasksList(tasksList.filter((t) => {
            return t !== task;
        }))
    }

    return (
        <>
        {settingModal && <ChangeProjectSettings show_settings={setSettingModal} project={proj} updateProject={setProj}/> }
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
            {taskContainer && <TaskContainer tasks={tasksList} delete_task={delete_task}/> }
        </div>
        </>
    )
}
