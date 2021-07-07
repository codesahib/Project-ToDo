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
        const query = {}
        try{
            const all_projects =  projectsModel.find(query)
            return all_projects
        }
        catch(e){
            console.log(`Unable to get projects. Error: ${e}`)
            return {}
        }
        


    }
}



