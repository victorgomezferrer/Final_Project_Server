const router = require('express').Router();

const recipesService = require('../services/recipes.service')
// la llamada se hace localhost:3001/api/axiosRecipes

router.get('/', recipesService.getRandomRecipes)



module.exports = router;