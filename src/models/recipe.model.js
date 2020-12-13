const { Sequelize, DataTypes } = require('sequelize');
const { Food } = require('./foods.model');
// const sequelize = new Sequelize(''
//     {dialect: 'mariadb'});

const sequelize = new Sequelize('mariadb://fm7rmj09364pazuy:bbmcfxo8lffztpf2@j5zntocs2dn6c3fj.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/rpi3l8pmwkkxlyvt');

const Recipe = sequelize.define('Recipe', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: null,
        autoIncrement: true
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: Food.id,
        allowNull: true,
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {tableName: 'recipe_ingredients', timestamps: false})

module.exports = { Recipe }