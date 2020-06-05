const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tasksSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	projectName: {
		type: String,
		require: true
	},
	taskDetails: {
		type: String,
		require: true
	},
	status: {
		type: String,
		default: 'Belum Dikerjakan'
	},
	deadline: {
		type: String,
		default: ''
	}
});

const Tasks = mongoose.model('tasks', tasksSchema);

module.exports = Tasks;
