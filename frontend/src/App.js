import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  let i=1;
  var projects_list = [];

  for(i=1;i<=5;i++){
    projects_list.push(<Project index={i}/>)
  }

  function add_project(){
    console.log("Button clicked");
    // projects_list.push(<Project index={i}/>);
    // i++;
  }
  return (
    <>
    <div className="App">
      <h1>Project-ToDo</h1>
    </div>
    <Header/>
    <center>
    {projects_list}
    </center>
    <center>
      <button id="buttonAddProject" onClick={add_project}>Add Project</button>
    </center>
    <Footer/>
    </>
  );
}

export default App;
