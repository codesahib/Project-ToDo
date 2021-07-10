/* All the Data Fetching from DB takes place here */
import model from "./projectsModel.js"
let projectsModel = model

export default class ProjectsDAO{
    
    // Initialize the DB connection by defining Schema and creating Model 
    static async injectDB(conn){
        if(projectsModel){
            console.log("[projectsDAO][injectDB] Returning model")
            return
        }
    }

    static async getProjects(){
        var projects_list = []
        projects_list = await projectsModel.find({},'_id title description tasks',function(err,res){
            if(err) console.log("[projectsDAO][getProjects] Cannot fetch list of projects")

            console.log("[projectsDAO][getProjects] Fetched list of projects")
        })
        return projects_list
    }

    static async createProject(this_project) {
        console.log("[projectsDAO][createProject]")
        try {
            await projectsModel.create(this_project) // .create method declares new Model object and calls .save()
            /* OR
                const newProject = new projectsModel(
                {
                    "title":this_project.title,
                    "description": this_project.description,
                    "tasks": []
                }
            )
                // To add new project in DB
                await newProject.save()
            */
        }
        catch(err){
            console.log(`[projectsDAO][createProject] Cannot add new project. Error: ${err}`)
        }
    }
}



