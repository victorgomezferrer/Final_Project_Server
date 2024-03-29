const router = require('express').Router();
const {
    getAllRecipes, addRecipe, deleteRecipe
} = require('../controllers/recipes.controller');

router.get('/', getAllRecipes);
router.post('/', addRecipe);
router.delete('/', deleteRecipe);

module.exports = router;