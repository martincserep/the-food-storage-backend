const dotenv = require('dotenv');
const path = require('path');
const Joi = require('@hapi/joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarSchema = Joi.object()
	.keys({
		NODE_ENV: Joi.string()
			.valid('production', 'development', 'test')
			.required(),
		PORT: Joi.number().default(3000),
		MYSQL_HOST: Joi.string().required(),
		MYSQL_USER: Joi.string().required(),
		MYSQL_PASSWORD: Joi.string().default(''),
		MYSQL_DATABASE: Joi.string().required(),
	})
	.unknown();

const { value: envVars, error } = envVarSchema
	.prefs({ errors: { label: 'key' } })
	.validate(process.env);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	mysql: {
		host: envVars.MYSQL_HOST,
		user: envVars.MYSQL_USER,
		password: envVars.MYSQL_PASSWORD,
		database: envVars.MYSQL_DATABASE,
	},
};
