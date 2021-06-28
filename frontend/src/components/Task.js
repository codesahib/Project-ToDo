import React, { useState } from 'react';
import './Task.css'
import ChangeTaskSettings from './Modals/ChangeTaskSettings'

export default function Task({task,delete_task}) {
    const [settingModal, setSettingModal] = useState(false);
    const [t, setT] = useState(task);

    return (
        <>
        {settingModal && <ChangeTaskSettings show_settings={setSettingModal} task={t} updateTask={setT}/> }
        <div id="task">
            <input type="checkbox"></input>
            <h5 id="taskTitle">{t.title}</h5>
            <div className="taskOptionsList">
                <i className="fa fa-gear taskOption" onClick={()=>{setSettingModal(true)}}></i>
                <i className="fa fa-sticky-note-o taskOption"></i>
                <i className="fa fa-trash taskOption" onClick={()=>{delete_task(t)}}></i>
            </div>
        </div>
        </>
    )
}
