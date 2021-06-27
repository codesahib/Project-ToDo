import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectContainer from './components/ProjectContainer'
import NewProject from './components/Modals/NewProject'

import Data from './data/projects.json'

import React, { useState } from 'react';

function App() {
  const [newProjModal, setnewProjModal] = useState(false);
  
  const [projects_list, setProjects] = useState(Data);

  function add_project(title, desc){
    let id = projects_list.length === 0 ? 1:projects_list[projects_list.length - 1].id + 1;

    const newProject = {
      id: id,
      title: title
    }

    setProjects([...projects_list,newProject]);
    setnewProjModal(false)
  }

  const delete_project = (project) =>{
    setProjects(projects_list.filter((p)=>{
      return p!==project;
    }))
  }

  const change_project = (project) => {

  }

  return (
    <>
    <div className="App">
      <h1>Project-ToDo</h1>
    </div>
    <Header/>
    <ProjectContainer projects={projects_list} delete_project={delete_project} show_modal={setnewProjModal}/>
    {newProjModal && <NewProject add_project={add_project} show_modal={setnewProjModal}/> }
    {/* <Footer/> */}
    </>
  );
}

export default App;
