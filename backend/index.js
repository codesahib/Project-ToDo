// Connect the DB and start server

import app from "./server.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import ProjectsDAO from "./dao/projectsDAO.js"

dotenv.config()

const port = process.env.PORT || 8000

// Connecting DB
mongoose.connect(process.env.PROJECTS_DB_URI_DEV,{ useNewUrlParser: true })
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
