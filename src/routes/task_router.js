'use strict'

const express = require('express'),
router = express.Router(),
controller = require('../controllers/task_controller');

router
    .get('/', controller.init)
    .post('/add', controller.add)
    .get('/deleteTask/:id', controller.deleteTask)
    .get('/turn/:id', controller.turn)
    .get('/edit/:id', controller.edit)
    .post('/edit/:id', controller.editUpdate)

module.exports = router;
