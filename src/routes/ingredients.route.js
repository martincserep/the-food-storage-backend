const express = require('express');

const { Ingredient } = require('../models/Ingredient.model');
const router = express.Router();

router.get(
    '/test',
    (req, res) => {
        res.send('ingredients works');
    }
)

router.get(
    '',
    (req, res) => {
        Ingredient.findAll().then(rsp => {
            res.send(rsp);
        })
    }
)

module.exports = router;