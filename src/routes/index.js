const express = require('express');
// const cartRoute = require('./cart.route');
const docsRoute = require('./docs.route');
const ingredientsRoute = require('./ingredients.route');
// const userRoute = require('./user.route');

const router = express.Router();

// router.use('/carts', cartRoute);
router.use('/docs', docsRoute);
router.use('/ingredients', ingredientsRoute);
// router.use('/users', userRoute);

module.exports = router;