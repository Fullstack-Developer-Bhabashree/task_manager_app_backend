require("dotenv").config();
const { urlencoded } = require("express");
const express = require('express');

const connectDB = require('./config/connectDB');

const cors = require('cors')

const taskRoutes = require('./routes/taskRoutes')

const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "https://task_manager_app.onrender.com"]
}))

app.use(express.json())

app.use(urlencoded({
    extended: false
}))

app.use(taskRoutes)
app.get("/", (req, res) => {
    res.send("Home Page")
})

// //Using middleware to perform next function
// const logger = (req, res, next) => {
//     console.log("Middleware ran")
//     console.log(req.method)
//     next()
// }





const PORT = process.env.PORT || 4000;

//Configuring startServer function to connect the application to MongoDB first and then establish the server
const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}


startServer();

// 