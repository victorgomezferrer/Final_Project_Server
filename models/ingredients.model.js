const { Schema, model } = require("mongoose");


const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    measure: {
        type: String,
        required: true,
        trim: true
    },
    recipeFrom: {
        type: String,
        required: true,
        trim: true
    },

})

const Ingredients = model('Ingredients', ingredientSchema)

module.exports = Ingredients