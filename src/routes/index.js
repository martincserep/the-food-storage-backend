const express = require('express');
// const cartRoute = require('./cart.route');
const docsRoute = require('./docs.route');
const ingredientsRoute = require('./ingredients.route');
const recipesRoute = require('./recipes.route');
// const userRoute = require('./user.route');

const router = express.Router();

// router.use('/carts', cartRoute);
router.use('/docs', docsRoute);
router.use('/ingredients', ingredientsRoute);
router.use('/recipes', recipesRoute);

module.exports = router;