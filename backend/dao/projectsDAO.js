let projectsModel

export default class ProjectsDAO{
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
        catch(e){
            console.log(`Unable to create Model. Error: ${e}`)
        }
    }

    static async getProjects(){
        var projects_list = []
        projects_list = await projectsModel.find({},'_id title description tasks',function(err,res){
            if(err) console.log("Cannot fetch projects list ")
        })
        return projects_list
    }

    static async createProject(this_project) {
        try {
            const newProject = new projectsModel(
                {
                    "title":this_project.title,
                    "description": this_project.description,
                    "tasks": []
                }
            )
            await newProject.save()
        }
        catch(err){
            console.log(err)
        }
    }
}



