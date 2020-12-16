const model = require('../models');
const mysql = require('mysql')

const mysqlConfig = mysql.createConnection({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database,
});


const getRecipe = async (recipeId) => {
  mysqlConfig.connect();
  mysqlConfig.createQuery()
}
module.exports = RecipesService;