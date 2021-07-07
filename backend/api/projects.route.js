import express from "express"
import ProjectsCtrl from "./projects.controller.js"

const router = express.Router()

// router.route("/").get(ProjectsCtrl.apiGetProjects)
router.route("/").get((req,res)=>{res.send("API")})

export default router