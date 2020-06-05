const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	prefix: {
		type: String,
		default: ''
	},
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	hp: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: false
	},
	role: {
		type: String,
		default: 'employee'
	},
	status: {
		type: String,
		default: 'pending'
	},
	token: {
		type: String,
		required: false,
		default: ''
	}
});

const User = mongoose.model('users', userSchema);

module.exports = User;
