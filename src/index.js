const mysql = require('mysql');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const cors = require('cors');

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
    app.use(function (req, res, next) {
        console.log('lofasz');
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });
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