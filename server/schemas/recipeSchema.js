const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    prep: {
        type: Array,
        required: true
    },
    reviews: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model("recipesModel", recipeSchema)