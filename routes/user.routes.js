const { Router } = require('express');
const {
  getBasketIngredients,
  likeRecipe,
  dislikeRecipe,
  addBasketIngredients,
  deleteBasketIngredients,
  allData,
} = require('../controllers/user.controller');
const passport = require('passport');

const router = Router();


router.post(
  '/allData',
  passport.authenticate('jwt', { session: false }),
  allData
);





router.get(
  '/getIngredients',
  passport.authenticate('jwt', { session: false }),
  getBasketIngredients
);

router.post('/addIngredients', passport.authenticate('jwt', { session: false }), addBasketIngredients);

router.delete('/deleteIngredient', passport.authenticate('jwt', { session: false }),
  deleteBasketIngredients);





router.post(
  '/likeRecipe',
  passport.authenticate('jwt', { session: false }),
  likeRecipe
);
router.delete(
  '/dislikeRecipe',
  passport.authenticate('jwt', { session: false }),
  dislikeRecipe
);

module.exports = router;
