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

  function add_project(title, desc){
    let id = projects_list.length === 0 ? 1:projects_list[projects_list.length - 1].id + 1;
    console.log(id)

    const newProject = {
      id: id,
      title: title
    }

    setProjects([...projects_list,newProject]);
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
    <NewProject add_project={add_project}/>
    <ProjectContainer projects={projects_list} delete_project={delete_project} add_project={add_project}/>
    <Footer/>
    </>
  );
}

export default App;
