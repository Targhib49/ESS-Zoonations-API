const express = require('express');
const app = express();
const cors = require('cors');
const expressJWT = require('express-jwt');
const { PORT, db, SECRET_KEY } = require('./config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
	if (err.code === 'credentials_required') {
		return res.status(401).json({ message: 'Access Denied for you' });
	} else if (err.code === 'invalid_token') {
		return res.status(401).json({ message: 'Invalid Credentials' });
	} else {
		return next();
	}
});

app.get('/', (req, res) => {
	res.status(200).json({ messege: 'hello to Zoonations ESS API ' });
});

app.use('/users', require('./routes/users'));

if (db) {
	app.listen(PORT, () => {
		console.log(`this app listen to port ${PORT}`);
	});
}
