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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        Ingredient.findAll().then(rsp => {
            res.send(rsp);
        })
    }
)

module.exports = router;