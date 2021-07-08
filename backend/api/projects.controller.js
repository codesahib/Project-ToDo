import ProjectsDAO from "../dao/projectsDAO.js"

export default class ProjectsController {
    static async apiGetProjects(req, res, next) {
        const projectsList = await ProjectsDAO.getProjects()
        res.json(projectsList)
    }

    static async apiCreateProject(req, res, next) {
        console.log("[apiCreateProject]")
        const project_to_be_added = req.body
        try{
            await ProjectsDAO.createProject(project_to_be_added)
            res.json({"Output":"data added"})
        }
        catch(e){
            console.log(e)
        }
    }
}