module.exports = (req, res, next) => {
    const recipe = req.body

    if(recipe.title.length < 10 ||
        recipe.title.length > 100 ||
        recipe.image.length === 0 ||
        recipe.ingredients.length === 0 ||
        recipe.prep.length === 0)
    {
        res.send({error: true , msg: 'Title should have from 10 to 100 characters. All inputs should be filled!'})
    } else {
        next()
    }
}