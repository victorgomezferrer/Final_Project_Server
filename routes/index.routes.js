const router = require('express').Router();
const authRoutes = require('./auth.routes');


const recipesRoutes = require('./recipes.routes');

router.use('/shopping', recipesRoutes);



router.use('/auth', authRoutes);
router.use('/user', require('./user.routes'));

module.exports = router;
