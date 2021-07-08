import ProjectsDAO from "../dao/projectsDAO.js"

export default class ProjectsController {
    static async apiGetProjects(req, res, next) {
        try{
            const projectsList = await ProjectsDAO.getProjects()
            res.json(projectsList)
        }
        catch(err){
            console.log(`[projects.controller][apiGetProjects] Error: ${err}`)
        }
    }

    static async apiCreateProject(req, res, next) {
        const project_to_be_added = req.body
        console.log("[projects.controller][apiCreateProject] Request: \n" + JSON.stringify(project_to_be_added,null,2))

        try{
            await ProjectsDAO.createProject(project_to_be_added)
            res.json({"Response":"Project added successfully"})
        }
        catch(err){
            console.log(`[projects.controller][apiCreateProject] Error: ${err}`)
        }
    }
}