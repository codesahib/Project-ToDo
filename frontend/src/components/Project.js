import React, { useState } from 'react';
import './Project.css'
import ChangeProjectSettings from './Modals/ChangeProjectSettings'
import TaskContainer from './TaskContainer'
import NewTask from './Modals/NewTask';

export default function Project({project,delete_project}) {
    const [taskModal, setTaskModal] = useState(false)
    const [settingModal, setSettingModal] = useState(false);
    const [taskContainer, setTaskContainer] = useState(false);
    const [proj, setProj] = useState(project);
    const [tasksList, setTasksList] = useState(project.tasks);

    const delete_task = (task) => {
        setTasksList(tasksList.filter((t) => {
            return t !== task;
        }))
    }

    const add_task = (title) => {
        let t_id = tasksList.length === 0 ? 1:tasksList[tasksList.length - 1].id + 1;

        const newTask = {
            t_id : t_id,
            title: title
        }

        setTasksList([...tasksList,newTask]);
        setTaskModal(false)
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
            {taskContainer && <TaskContainer tasks={tasksList} delete_task={delete_task} show_modal={setTaskModal}/> }
        </div>
        {taskModal && <NewTask add_task={add_task} show_modal={setTaskModal}/>}
        </>
    )
}
