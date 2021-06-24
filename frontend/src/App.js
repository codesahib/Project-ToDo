import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectContainer from './components/ProjectContainer'

function App() {
  let i=1;
  var projects_list = [
    {"id":1,"title":"Project 1"},
    {"id":2,"title":"Project 2"},
    {"id":3,"title":"Project 3"}];

  function add_project(project){
    console.log("Add Project",project);
  }

  const delete_project = (project) =>{
    console.log("Add Project",project);
  }

  return (
    <>
    <div className="App">
      <h1>Project-ToDo</h1>
    </div>
    <Header/>
    <ProjectContainer projects={projects_list} delete_project={delete_project} add_project={add_project}/>
    <Footer/>
    </>
  );
}

export default App;
