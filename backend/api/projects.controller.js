import ProjectsDAO from "../dao/projectsDAO.js"

export default class ProjectsController {
    static async apiGetProjects(req, res, next) {
        
        const projectsList = await ProjectsDAO.getProjects()
        res.json(projectsList)
    }
}