import mongoose from 'mongoose'

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
}) // We can have a second argument to Schema to overwrite the default collections name {collection: 'my-projects'}

// Create Model for CRUD operations
var model;

try {
    model = new mongoose.model("Project",projectSchema)
}
catch(err){
    console.log(`[projectsDAO][model] Unable to create Model. Error: ${err}`)
}

export default model