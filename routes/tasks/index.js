const express = require('express');
const router = express.Router();
const verify = require('../authorization');

const {
	getAll,
	getTaskByUserId,
	createNewTask,
	updateStatus
	// deleteTask
} = require('./controller');

router.get('/', getAll);
router.get('/id', verify, getTaskByUserId);
router.post('/', createNewTask);
router.put('/:id', updateStatus);
// router.delete('/token', deleteTask);

module.exports = router;
