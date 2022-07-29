const express = require('express');
const router = express.Router();
const {Homepage, Categories, ExploreRecipe,
     ExploreCategories, SearchRecipe, ExploreLatest, ExploreRandom,
     SubmitRecipe, SubmitRecipeOnPost} = require('../controllers/recipeController');

router.route('/').get(Homepage);
router.route('/categories').get(Categories);
router.route('/recipe/:id').get(ExploreRecipe);
router.route('/categories/:id').get(ExploreCategories);
router.route('/search').post(SearchRecipe);
router.route('/explore-latest').get(ExploreLatest);
router.route('/explore-random').get(ExploreRandom);
router.route('/submit-recipe').get(SubmitRecipe);
router.route('/submit-recipe').post(SubmitRecipeOnPost);




module.exports = router;