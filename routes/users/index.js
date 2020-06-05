const express = require('express');
const router = express.Router();
const verify = require('../authorization');

const {
	getAll,
	registration,
	login,
	getUserById,
	refreshToken,
	addToken,
	logout,
	changeStatus
} = require('./controller');

router.get('/', getAll);
router.get('/id', verify, getUserById);
router.post('/', registration);
router.post('/login', login);
router.post('/token', refreshToken);
router.put('/addToken/:id', addToken);
router.put('/logout/:id', logout);
router.put('/status/:id', changeStatus);

module.exports = router;
