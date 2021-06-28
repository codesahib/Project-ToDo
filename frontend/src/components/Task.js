import React, { useState } from 'react';
import './Task.css'
import ChangeSettings from './Modals/ChangeSettings'

export default function Task({task,delete_task}) {
    const [settingModal, setSettingModal] = useState(false);
    const [taskContainer, setTaskContainer] = useState(false);

    return (
        <>
        {settingModal && <ChangeSettings show_settings={setSettingModal} task={task}/> }
        <div id="task">
            <input type="checkbox"></input>
            <h5 id="taskTitle">{task.title}</h5>
            <div className="taskOptionsList">
                <i className="fa fa-gear taskOption" onClick={()=>{setSettingModal(true)}}></i>
                <i className="fa fa-list-alt taskOption"></i>
                <i className="fa fa-trash taskOption" onClick={()=>{delete_task(task)}}></i>
            </div>
        </div>
        </>
    )
}
