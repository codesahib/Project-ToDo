import { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectContainer from './components/ProjectContainer'
import NewProject from './components/Modals/NewProject'

import Data from './data/projects.json'

import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState("");
  const [newProjModal, setnewProjModal] = useState(false);

  const [projects_list, setProjects] = useState(Data);

  /* Settings for getting data from api
  const [projects_list, setProjects] = useState();

  const url="http://localhost:5000/api/v1/projects/"

  const getAllProjects = () =>{
    axios.get(`${url}`)
    .then(response=>{
      setProjects(response.data)
    })
    .catch(e=>console.log("Error fetching projects"))
  }
  
  useEffect(() => {
    getAllProjects();
  }, []);

  */
 
  function add_project(title, desc){
    let id = projects_list.length === 0 ? 1:projects_list[projects_list.length - 1].id + 1;

    const newProject = {
      id: id,
      title: title,
      description: desc,
      tasks: []
    }

    setProjects([...projects_list,newProject]);
    setnewProjModal(false)
  }

  const delete_project = (project) =>{
    setProjects(projects_list.filter((p)=>{
      return p!==project;
    }))
  }

  return (
    <>
    <div className="App-header">
      <h1>Project-ToDo</h1>
      <i>by Gursahib Singh</i>
    </div>
    <Navbar setUser={setUser} user={user}/>
    <ProjectContainer projects={projects_list} delete_project={delete_project} show_modal={setnewProjModal}/>
    {newProjModal && <NewProject add_project={add_project} show_modal={setnewProjModal}/> }
    {/* <Footer/> */}
    </>
  );
}

export default App;
