const Recipes = require('../models/recipes.model')

const getAllRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipes.find();
        res.status(200).json(recipes);
    } catch (err) { next(err) }
}

const addRecipe = async (req, res, next) => {
    let { label, ingredients } = req.body;
    try {
        const recipe = await Recipes.create(req.body);
        res.status(201).json(recipe);
    } catch (err) { next(err) }
}

const deleteRecipe = (req, res, next) => {
    try {
        const recipe = Recipes.findByIdAndDelete(req.params.id);
        res.status(200).json(recipe);
    } catch (err) { next(err) }
}




module.exports = { getAllRecipes, addRecipe, deleteRecipe }