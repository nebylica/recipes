const recipeDb = require('../schemas/recipeSchema')

module.exports = {
    loadRecipes: async (req, res) =>{
        const recipes = await recipeDb.find()
        res.send({recipes})
    },

    upload : async (req, res) => {
        let recipe = new recipeDb

        recipe.title = req.body.title
        recipe.image = req.body.image
        recipe.ingredients = req.body.ingredients
        recipe.prep = req.body.prep
        recipe.reviews = []
        recipe.addedToFavorites = false

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
    },

    favorite: async (req, res) => {
        const {id} = req.params
        const recipe = await recipeDb.findOne({_id: id})
        await recipeDb.findOneAndUpdate({_id: id}, {$set: {addedToFavorites: !recipe.addedToFavorites}}, {new: true})

        res.send({error: false, msg:'added to favorites'})
    },

    loadFavorites: async (req, res) => {
        const recipes = await recipeDb.find({addedToFavorites: true})
        res.send(recipes)
    },

    deleteRecipe: async (req, res) => {
        await recipeDb.findByIdAndDelete(req.params.id)

        res.send({error: false, msg: 'recipe deleted'})
    },

    findRecipe: async (req, res) => {

        const prod = req.body
        const recipes = await recipeDb.find()
        const arr = []

        recipes.map(rec => {
            let num = 0
            rec.ingredients.map(ingr => {
                prod.map(item => {
                    if(item === ingr.ingredient){
                        num ++
                    }
                })
                if(num === prod.length) {
                    !arr.includes(rec) ? arr.push(rec) : null
                }
            })
        })

        res.send(arr)
    }
}