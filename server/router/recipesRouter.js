const express = require('express')
const router = express.Router()
const middle = require('../middle/validation.js')
const controller = require('../controlers/controllerRecipes.js')

router.post('/upload',middle.upload , controller.upload)
router.get('/loadRecipes', controller.loadRecipes)
router.get('/recipe/:id', controller.recipe)
router.post('/review',middle.review , controller.review)



module.exports = router