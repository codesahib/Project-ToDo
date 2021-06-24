import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectContainer from './components/ProjectContainer'
import NewProject from './components/NewProject'

import React, { useState } from 'react';

function App() {
  const [projects_list, setProjects] = useState([
    {"id":1,"title":"Project 1"},
    {"id":2,"title":"Project 2"},
    {"id":3,"title":"Project 3"}
    ]);

  function add_project(project){
    console.log("Add Project",project);
  }

  const delete_project = (project) =>{
    // alert("Are you sure?")
    setProjects(projects_list.filter((p)=>{
      return p!==project;
    }))
  }

  return (
    <>
    <div className="App">
      <h1>Project-ToDo</h1>
    </div>
    <Header/>
    <NewProject/>
    <ProjectContainer projects={projects_list} delete_project={delete_project} add_project={add_project}/>
    <Footer/>
    </>
  );
}

export default App;
