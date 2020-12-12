const express = require('express');
const { Food } = require('../models/foods.model');

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

module.exports = router;