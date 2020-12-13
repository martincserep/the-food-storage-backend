const express = require('express');
const { Food } = require('../models/foods.model');
const { Ingredient } = require('../models/Ingredient.model');
const { Recipe } = require('../models/recipe.model');

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
        Recipe.findAll({ include: [Food]})

    }
)

module.exports = router;