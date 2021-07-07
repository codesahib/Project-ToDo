// Connect the DB and start server

import app from "./server.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import ProjectsDAO from "./dao/projectsDAO.js"

dotenv.config()

const port = process.env.PORT || 8000

// Connecting DB
mongoose.connect(process.env.RESTREVIEWS_DB_URI,{ useNewUrlParser: true })
.then(async (client)=>{
    console.log("Database Connection Successful");
    await ProjectsDAO.injectDB(client);
    app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
})
.catch((err)=> {
    console.log("****** Error Connecting to DB. Error: "+ err)
    process.exit(1)
})


const createProject = async () => {
    try {
        const newProject = new Projects(
            {
                "title":"Complete MERN Project",
                "description": "Hands-on experience on new tech stack",
                "tasks": [
                    {
                        "title": "Learn Basics",
                        "notes": "Haven't started"
                    }
                ]
            }
        )
        const result = await newProject.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

// createProject()