import express from "express"
import ProjectsCtrl from "./projects.controller.js"

const router = express.Router()

router.route("/").get(ProjectsCtrl.apiGetProjects)
router.route("/create").post(ProjectsCtrl.apiCreateProject)

export default router