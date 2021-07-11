import express from "express"
import ProjectsCtrl from "./projects.controller.js"

const router = express.Router()

router.route("/").get(ProjectsCtrl.apiGetProjects)
router.route("/create").post(ProjectsCtrl.apiCreateProject)
router.route("/delete").post(ProjectsCtrl.apiDeleteProject)

router.route("/add/task").post(ProjectsCtrl.apiAddTask)
router.route("/remove/task").post(ProjectsCtrl.apiRemoveTask)

export default router