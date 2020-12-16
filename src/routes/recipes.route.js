const express = require('express');
const config = require('../config/config');
// const { HasMany } = require('sequelize/types');
// const { mysql } = require('../config/config');
const mysql = require('mysql');
const { Food } = require('../models/foods.model');
const { Ingredient } = require('../models/Ingredient.model');
const { Recipe } = require('../models/recipe.model');
const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.get(
    '/test',
    (req, res) => {
        res.send('recipes works');
    },
)
router.get(
    '',
    (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        Food.findAll().then(rsp => {
            res.send(rsp)
        })
    },
)

router.get(
    '/:id',
    (req, res) => {
        let food = {};
        let ingredients = [];
        const mysqlConfig = mysql.createConnection({
            host: config.mysql.host,
            user: config.mysql.user,
            password: config.mysql.password,
            database: config.mysql.database,
        });
        const mysqlConfig2 = mysql.createConnection({
            host: config.mysql.host,
            user: config.mysql.user,
            password: config.mysql.password,
            database: config.mysql.database,
        });
        mysqlConfig.connect();
        const foodSql = `SELECT *
            FROM recipes
            WHERE id =  ${req.params.id}`;
        const ingredientSql = `
        SELECT
            *
        FROM
            ingredients
            INNER JOIN
            recipe_ingredients
            ON 
                ingredients.id = recipe_ingredients.ingredient_id
        WHERE
            recipe_ingredients.recipe_id = ${req.params.id}
        `
        mysqlConfig.query(foodSql, (error, results, fields) => {
                food = {...results[0]};
                mysqlConfig2.query(ingredientSql, (error, results, fields) => {
                    ingredients = results;
                    console.log(results)
                    res.send({
                        food: food,
                        ingredients: ingredients
                    })
                });
            });

        mysqlConfig.end();

    }
)

module.exports = router;