const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, getSingleTask, deleteTask, updateTask } = require('../controllers/taskControllers')

//Routes for creating a new task using post request method

router.post("/api/tasks", createTask)

//Routes for getting all tasks in the database

router.get("/api/tasks", getAllTasks)

//Routes for getting single task by id

router.get("/api/task/:id", getSingleTask)

//Routes for deleting a task by id

router.delete("/api/task/:id", deleteTask)

//Routes for updating a task by id

router.put("/api/task/:id", updateTask)



module.exports = router;