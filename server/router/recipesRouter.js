const express = require('express')
const router = express.Router()
const middle = require('../middle/uploadValidation.js')
const controller = require('../controlers/controllerRecipes.js')

router.post('/upload',middle, controller.upload)

module.exports = router