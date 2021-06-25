import React, { useState } from 'react';
import './Task.css'
import ChangeSettings from './Modals/ChangeSettings'
import TaskContainer from './TaskContainer'

export default function task({task,delete_task}) {
    const [settingModal, setSettingModal] = useState(false);
    const [taskContainer, setTaskContainer] = useState(false);

    return (
        <>
        {settingModal && <ChangeSettings show_settings={setSettingModal} task={task}/> }
        <div id="taskDisplay">
            <input type="checkbox"></input>
            <h5 id="taskTitle">{task.title}</h5>
            <div className="taskOptionsList">
                <i className="fa fa-gear taskOption" onClick={()=>{setSettingModal(true)}}></i>
                <i className="fa fa-list-alt taskOption"></i>
                <i className="fa fa-trash taskOption" onClick={()=>{delete_task(task)}}></i>
                <i className="fa fa-chevron-down taskOption" onClick={()=>{setTaskContainer(!taskContainer)}}></i>
            </div>
        </div>
        </>
    )
}
