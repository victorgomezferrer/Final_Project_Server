const router = require('express').Router();
const {
    getAllIngredients, addIngredient, deleteIngredient,
} = require('../controllers/recipes.controller');

router.get('/ingredients', getAllIngredients);
router.post('/add', addIngredient)
router.delete('/delete', deleteIngredient)

module.exports = router;