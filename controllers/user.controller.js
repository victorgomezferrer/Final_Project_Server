const Ingredients = require('../models/ingredients.model');
const Recipes = require('../models/recipes.model');
const User = require('../models/user.model');


const allData = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;

    const user = await User.findById(user_id).populate('myBasketIngredients').populate('favoriteRecipes').exec();

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};




const getBasketIngredients = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    console.log('eeeeeeeeeeeeee', user_id);
    const user = await User.findById(user_id).populate('myBasketIngredients').exec();

    res.status(200).json(user.myBasketIngredients);
  } catch (err) {
    next(err);
  }
};

const addBasketIngredients = async (req, res, next) => {

  try {
    const { _id: user_id } = req.user;
    const {
      name,
      quantity,
      measure,
      recipeFrom,
    } = req.body;

    const ingredient = await Ingredients.create({
      name,
      quantity,
      measure,
      recipeFrom,
    });
    const { _id } = ingredient

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $addToSet: { myBasketIngredients: _id } },
      { new: true }
    );
    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

const deleteBasketIngredients = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { _id } = req.body;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $pull: { myBasketIngredients: _id } },
      { new: true }
    );
    const deleteItem = await Ingredients.findByIdAndDelete(_id)
    console.log(deleteItem)
    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};





const likeRecipe = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { label, uri } = req.body;
    const recipe = await Recipes.create({ label, uri });
    const { _id } = recipe
    console.log(recipe);
    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $addToSet: { favoriteRecipes: _id } },
      { new: true }
    );

    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

const dislikeRecipe = async (req, res, next) => {
  try {
    const { _id: user_id } = req.user;
    const { _id } = req.body;

    const userUpdated = await User.findByIdAndUpdate(
      user_id,
      { $pull: { favoriteRecipes: _id } },
      { new: true }
    );
    const deleteItem = await Recipes.findByIdAndDelete(_id)
    console.log(deleteItem)
    res.status(200).json(userUpdated);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBasketIngredients,
  addBasketIngredients,
  deleteBasketIngredients,
  likeRecipe,
  dislikeRecipe,
  allData,
};