import ProjectsDAO from "../dao/projectsDAO.js"

/* All the Data Manipulation takes place here */

export default class ProjectsController {
    static async apiGetProjects(req, res) {
        try{
            const projectsList = await ProjectsDAO.getProjects()
            res.json(projectsList)
        }
        catch(err){
            console.log(`[projects.controller][apiGetProjects] Error: ${err}`)
        }
    }

    static async apiCreateProject(req, res) {
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

    static async apiDeleteProject(req, res) {
        const project_to_be_deleted = req.body
        console.log("[projects.controller][apiDeleteProject] Request: \n" + JSON.stringify(project_to_be_deleted,null,2))

        try{
            await ProjectsDAO.deleteProject(project_to_be_deleted)
            res.json({"Response":"Project deleted successfully"})
        }
        catch(err){
            console.log(`[projects.controller][apiDeleteProject] Error: ${err}`)
        }
    }

    static async apiAddTask(req,res) {

        console.log("[projects.controller][apiAddTask] Request: \n" + JSON.stringify(req.body,null,2))

        try{
            await ProjectsDAO.addTask(req.body)
            res.json({"Response":"Task added successfully"})
        }
        catch(err){
            console.log(`[projects.controller][apiAddTask] Error: ${err}`)
        }

    }

    static async apiRemoveTask(req,res) {

        console.log("[projects.controller][apiRemoveTask] Request: \n" + JSON.stringify(req.body,null,2))

        try{
            await ProjectsDAO.removeTask(req.body)
            res.json({"Response":"Task removed successfully"})
        }
        catch(err){
            console.log(`[projects.controller][apiRemoveTask] Error: ${err}`)
        }

    }
}