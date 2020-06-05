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
			const task = await User.find({ userId: id });
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
	}
	// getUserById: async (req, res) => {
	// 	try {
	// 		const id = req.user._id;
	// 		const status = req.user.isLoggedIn;
	// 		const user = await User.findById(id);
	// 		res.status(200).json({ currentUser: user, isLoggedIn: status });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// },
	// registration: async (req, res) => {
	// 	try {
	// 		const { prefix, fullname, email, hp, password, role, status } = req.body;

	// 		// Check if email has already registered
	// 		const result = await User.findOne({ email: email });
	// 		if (result) return res.status(401).send('Your email has already registered');

	// 		bcrypt.genSalt(10, function(err, salt) {
	// 			bcrypt.hash(password, salt, async function(err, hash) {
	// 				const users = await User.create({
	// 					prefix,
	// 					fullname,
	// 					email,
	// 					hp,
	// 					password: hash,
	// 					role,
	// 					status
	// 				});
	// 				res.status(201).send({
	// 					message: 'New user successfully created!',
	// 					data: users
	// 				});
	// 			});
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// },
	// login: async (req, res) => {
	// 	const { email, password } = req.body;
	// 	const result = await User.findOne({ email: email });

	// 	// Check if email exist
	// 	if (!result) return res.status(401).send('Your email is not registered');

	// 	const { _id, status } = result;

	// 	// Check status
	// 	if (status === 'pending') return res.status(401).send('Your account is not activated yet');

	// 	// Check if email and password match
	// 	bcrypt.compare(password, result.password).then((response) => {
	// 		if (response === true) {
	// 			const token = jwt.sign({ _id, isLoggedIn: true }, SECRET_KEY, {
	// 				expiresIn: '15m'
	// 			});
	// 			const refreshToken = jwt.sign({ _id, isLoggedIn: true }, REFRESH_KEY, { expiresIn: '24h' });
	// 			res.status(200).send({ token: token, refreshToken: refreshToken });
	// 		} else {
	// 			res.status(401).send("Your email and password don't match");
	// 		}
	// 	});
	// },
	// refreshToken: async (req, res) => {
	// 	const { refreshToken } = req.body;
	// 	const result = await User.findOne({ token: refreshToken });
	// 	if (!result) return res.status(401).send('Forbidden');
	// 	if (refreshToken !== result.token) return res.status(403).send('Invalid Credentials');
	// 	jwt.verify(refreshToken, REFRESH_KEY, (err, data) => {
	// 		if (err) return res.status(403).send('Invalid Credentials');
	// 		const accessToken = jwt.sign({ _id: data._id, isLoggedIn: true }, SECRET_KEY, { expiresIn: '15m' });
	// 		res.status(200).send({ token: accessToken });
	// 	});
	// },
	// addToken: async (req, res) => {
	// 	try {
	// 		const { id } = req.params;
	// 		const { refreshToken } = req.body;

	// 		const result = await User.findByIdAndUpdate(
	// 			id,
	// 			{
	// 				$set: {
	// 					token: refreshToken
	// 				}
	// 			},
	// 			{ new: true }
	// 		);

	// 		res.status(200).json({
	// 			message: 'Add token success',
	// 			data: result
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// },
	// logout: async (req, res) => {
	// 	const { id } = req.params;
	// 	const result = await User.findByIdAndUpdate(
	// 		id,
	// 		{
	// 			$set: {
	// 				token: ''
	// 			}
	// 		},
	// 		{ new: true }
	// 	);

	// 	res.status(200).json({
	// 		message: 'Delete token success',
	// 		data: result
	// 	});
	// }
};
