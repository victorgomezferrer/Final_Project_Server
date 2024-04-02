const Ingredients = require("../models/ingredients.model");




const getAllIngredients = async (req, res, next) => {
    try {
        const ingredients = await Ingredients.find();
        res.status(200).json(ingredients);
    } catch (err) { next(err) }
}



const addIngredient = async (req, res, next) => {

    const {
        name,
        quantity,
        measure,
        recipeFrom,
    } = req.body;
    try {
        const ingredient = await Ingredients.create({
            name,
            quantity,
            measure,
            recipeFrom,
        });


        res.status(201).json(ingredient);

    } catch (err) { res.status(500).json(err) }
}
const deleteIngredient = async (req, res) => {
    console.log(req.body._id)
    try {
        const ingredient = await Ingredients.findByIdAndDelete(req.body._id);

        res.status(200).json(ingredient);
    } catch (err) { res.status(500).json(err) }
}

module.exports = { getAllIngredients, addIngredient, deleteIngredient }