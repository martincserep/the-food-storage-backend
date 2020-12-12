const mysql = require('mysql');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

let server;

const mysqlConfig = mysql.createConnection({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database,
});

const port = process.env.PORT || config.port;

mysqlConfig.connect((error) => {
	if (error) {
		throw error;
	}
	logger.info('Connected to MySQL');
	server = app.listen(port, () => {
		logger.info(`Listening to port ${port}`);
	});
});

const exitHandler = () => {
	if (server) {
		server.close(() => {
			logger.info(`Server closed`);
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
};

const unexpectedErrorHandler = (error) => {
	logger.error(error);
	exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
	logger.info('SIGTERM received');
	if (server) {
		server.close();
	}
});