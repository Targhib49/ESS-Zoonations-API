require('dotenv').config();

module.exports = {
	PORT: process.env.PORT,
	DATABASE: process.env.DATABASE,
	SECRET_KEY: process.env.SECRET_KEY,
	REFRESH_KEY: process.env.REFRESH_KEY
};
