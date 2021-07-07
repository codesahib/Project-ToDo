import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

// Connecting DB
mongoose.connect(process.env.RESTREVIEWS_DB_URI,{ useNewUrlParser: true })
.then(()=>{console.log("Database Connection Successfull")})
.catch((err)=> {console.log("Error Connecting to DB. Error:"+ err)})

// Define Schema
const projectSchema = new mongoose.Schema({
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
const Projects = new mongoose.model("Project",projectSchema)

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

createProject()