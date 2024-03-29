const router = require('express').Router();
const {
    getAllIngredients, addIngredient, deleteIngredient,
} = require('../controllers/ingredients.controller');

router.get('/', getAllIngredients);
router.post('/', addIngredient)
router.delete('/', deleteIngredient)

module.exports = router;