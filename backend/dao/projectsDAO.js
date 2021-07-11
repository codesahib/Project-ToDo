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
        projects_list = await projectsModel.find({},'title',function(err,res){
            if(err) console.log("[projectsDAO][getProjects] Cannot fetch list of projects")

            console.log("[projectsDAO][getProjects] Fetched list of projects")
        })
        return projects_list
    }

    static async createProject(req,res) {
        console.log("[projectsDAO][createProject]")
        const this_project=req
        console.log(req)
        // Checking if project exists for same title
        let this_title = this_project.title
        let projects_exist
        try {
            projects_exist = await projectsModel.countDocuments({"title":this_title})
            console.log(projects_exist)
            if(projects_exist){
                console.log("[projectsDAO][createProject] Project already exists")
            }
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

    static async deleteProject(this_project){
        console.log("[projectsDAO][deleteProject]")
        try{
            await projectsModel.deleteOne(this_project)
        }
        catch(err){
            console.log(`[projectsDAO][createProject] Cannot delete project. Error: ${err}`)
        }
    }

    static async addTask(req,res) {
        console.log("[projectsDAO][addTask]")
        const project_title = req.project_title
        var this_task = req.task

        try {
            await projectsModel.updateOne({"title":project_title},{
                "$push":
                {"tasks": this_task}
            }) // .create method declares new Model object and calls .save()
        }
        catch(err){
            console.log(`[projectsDAO][addTask] Cannot add new project. Error: ${err}`)
        }
    }

    static async removeTask(req,res){
        console.log("[projectsDAO][removeTask]")
        const project_title = req.project_title
        var this_task = req.task
        try{
            await projectsModel.updateOne({"title":project_title},{
                "$pull":
                {"tasks": this_task}
            })
        }
        catch(err){
            console.log(`[projectsDAO][removeTask] Cannot delete project. Error: ${err}`)
        }
    }
}



