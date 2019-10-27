'use strict'

const Task = require('../models/tasks');

async function init(req, res) {
    const tasks = await Task.find();
    res.render('index',{tasks});
}


async function add(req, res) {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/task');
}

async function deleteTask(req,res) {
    const {id} = req.params;
    await Task.remove({_id: id});
    res.redirect('/task');
}

async function turn(req,res) {
    const {id} = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/task');
}

async function edit(req,res) {
    const {id} = req.params;
    const task = await Task.findById(id);
    console.log(task);
    res.render('edit', {task});
}

async function editUpdate(req, res) {
    const {id} = req.params;
    const task = req.body;
    await Task.update({_id: id},task);
    res.redirect('/task');
}

module.exports = {
    init,
    add,
    deleteTask,
    turn,
    edit,
    editUpdate
};