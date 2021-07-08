/* All the Data Fetching from DB takes place here */

let projectsModel

export default class ProjectsDAO{
    
    // Initialize the DB connection by defining Schema and creating Model 
    static async injectDB(conn){
        if(projectsModel) return
    
        // Define Schema
        const projectSchema = new conn.Schema({
            title: {
                type: String,
                required: true
            },
            description: String,
            tasks:[
                {
                    title: {
                        type: String,
                        required: true
                    },
                    notes: String
                }
            ]
        })

        // Create Model for CRUD operations
        try {
            projectsModel = new conn.model("Project",projectSchema)
        }
        catch(err){
            console.log(`[projectsDAO][injectDB] Unable to create Model. Error: ${err}`)
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
            const newProject = new projectsModel(
                {
                    "title":this_project.title,
                    "description": this_project.description,
                    "tasks": []
                }
            )
            // To add new project in DB
            await newProject.save()
        }
        catch(err){
            console.log(`[projectsDAO][createProject] Cannot add new project. Error: ${err}`)
        }
    }
}



