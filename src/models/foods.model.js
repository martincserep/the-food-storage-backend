const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(''
//     {dialect: 'mariadb'});

const sequelize = new Sequelize('mariadb://fm7rmj09364pazuy:bbmcfxo8lffztpf2@j5zntocs2dn6c3fj.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/rpi3l8pmwkkxlyvt');

const Food = sequelize.define('Food', {
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
    description: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {tableName: 'recipes', timestamps: false})

module.exports = { Food }