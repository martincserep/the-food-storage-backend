const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(''
//     {dialect: 'mariadb'});

const sequelize = new Sequelize('mariadb://fm7rmj09364pazuy:bbmcfxo8lffztpf2@j5zntocs2dn6c3fj.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/rpi3l8pmwkkxlyvt');

const Ingredient = sequelize.define('Ingredient', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: null,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kcal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    protein: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    fat: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    carbohydrate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    glycemic_index: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {tableName: 'ingredients', timestamps: false})

module.exports = { Ingredient }