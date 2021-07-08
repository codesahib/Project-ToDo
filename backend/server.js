// Main server code
import express from "express" // Or const express = require('express');
import cors from "cors"
import projects from "./api/projects.route.js" // For routes

const app = express() // Make express app/server

app.use(express.static('./public')) // To get static resources

app.use(cors()) // Middleware - Things used by express
app.use(express.json()) // This is same as BodyParser. It's now included in express. Server can accept JSON in body of request

app.get('/',(req,res) => {
    res.send('This is home page')
});

app.use("/api/v1/projects", projects) // General procedure for api routes
app.use("*", (req,res) => res.status(404).json({error: "[server] Page not found"})) // Or app.all('*',(req,res) => {res.status(404).send('Not Found')})

export default app