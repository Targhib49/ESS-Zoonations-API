const { Tasks } = require('../../models');

module.exports = {
	getAll: async (req, res) => {
		try {
			const tasks = await Tasks.find({}).populate('userId');

			res.status(200).json({ message: 'Get All Tasks', data: tasks });
		} catch (error) {
			console.log(error);
		}
	},
	getTaskByUserId: async (req, res) => {
		try {
			const id = req.user._id;
			const task = await Tasks.find({ userId: id });
			res.status(200).json({ task: task });
		} catch (error) {
			console.log(error);
		}
	},
	createNewTask: async (req, res) => {
		try {
			const { userId, projectName, taskDetails, deadline } = req.body;

			const newTask = await Tasks.create({
				userId,
				projectName,
				taskDetails,
				deadline
			});

			res.status(201).send({
				message: 'New task successfully created!',
				data: newTask
			});
		} catch (error) {
			console.log(error);
		}
	},
	updateStatus: async (req, res) => {
		try {
			const { id } = req.params;
			const { status } = req.body;

			const updatedTask = await Tasks.findByIdAndUpdate(
				id,
				{
					$set: {
						status: status
					}
				},
				{ new: true }
			);

			res.status(200).json({ message: 'Task Status Updated', data: updatedTask });
		} catch (error) {
			throw error;
		}
	},
	deleteTask: async (req, res) => {
		try {
			const { id } = req.params;

			const deletedTask = await Tasks.findByIdAndDelete(id);

			res.status(200).json({ message: 'Task Status Updated', data: updatedTask });
		} catch (error) {
			console.log(error);
		}
	}
};
