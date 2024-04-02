const router = require('express').Router();

const recipesService = require('../services/recipes.service')
// la llamada se hace localhost:3001/api/axiosRecipes

router.get('/', (req, res) => {
    recipesService.getRandomRecipes()
        .then(recipes => res.json(recipes))
})

router.get('/:name', (req, res) => {

    const name = req.params.name

    recipesService.getRecipeByName(name)
        .then(recipes => res.json(recipes))
})

module.exports = router;