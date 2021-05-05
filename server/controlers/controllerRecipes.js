const recipeDb = require('../schemas/recipeSchema')

module.exports = {
    loadRecipes: async (req, res) =>{
        const recipes = await recipeDb.find()
        res.send({recipes})
    },

    upload : async (req, res) => {

        let recipe = new recipeDb

        Object.keys(req.body).map(key => {
            recipe[key] = req.body[key]
        })
        await recipe.save()

        res.send({error: false})
    },

    recipe: async (req, res) => {
        const recipe = await recipeDb.findById(req.params.id)
        res.send({recipe})
    },

    review: async (req, res) => {

        if(!!req.body.review) {
            await recipeDb.findByIdAndUpdate(
                req.body.id,
                {$push: {reviews: req.body.review}})
        }

        const recipe = await recipeDb.findById(req.body.id)

        res.send({recipe})

    }
}