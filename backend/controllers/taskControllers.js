const taskModel = require('../models/taskModel');

const createTask = async (req, res) => {
    try {
        const tasks = await taskModel.create(req.body)
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getSingleTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await taskModel.findById(id)
        if (!task) {
            return res.status(404).json(`No task with id:${id} exists`)
        }
        console.log(task)
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await taskModel.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`No task with id:${id} exists`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await taskModel.findByIdAndUpdate(
            { _id: id }, req.body, { new: true, runValidators: true }
        )
        if (!task) {
            return res.status(404).json(`No task with id:${id} exists`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


module.exports = { createTask, getAllTasks, getSingleTask, deleteTask, updateTask }