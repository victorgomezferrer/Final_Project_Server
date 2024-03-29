const router = require('express').Router();


const axiosRoutes = require('../externalServices/routes/axios.routes')
router.use('/axiosRecipes', axiosRoutes);


const ingredientRoutes = require('./ingredients.routes')
router.use('/ingredients', ingredientRoutes);


const recipesRoutes = require('./recipes.routes');
router.use('/recipes', recipesRoutes);



router.use('/user', require('./user.routes'));


const authRoutes = require('./auth.routes');
router.use('/auth', authRoutes);



module.exports = router;
