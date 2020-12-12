
const models = require('../models');
const catchAsync = require('../utils/catchAsync');


const getAllIngredients = catchAsync(async (req, res, next) => {
    let ingredients;
    try {
        // ingredients = await models.Ingerient.
    } catch (error) {
      return next(error);
    }
});

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
};