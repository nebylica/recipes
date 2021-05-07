const express = require('express')
const router = express.Router()
const middle = require('../middle/validation.js')
const controller = require('../controlers/controllerRecipes.js')

router.post('/upload',middle.upload , controller.upload)
router.post('/review',middle.review , controller.review)
router.post('/findRecipe', controller.findRecipe)

router.get('/loadRecipes', controller.loadRecipes)
router.get('/recipe/:id', controller.recipe)
router.get('/favorite/:id', controller.favorite)
router.get('/loadFavorites', controller.loadFavorites)
router.get('/deleteRecipe/:id', controller.deleteRecipe)


module.exports = router