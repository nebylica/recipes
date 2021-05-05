const validator = require("email-validator");

module.exports = {
    upload: (req, res, next) => {

        const {title, image, ingredients, prep} = req.body

        if(title.length < 10 ||
            title.length > 100 ||
            image.length === 0 ||
            ingredients.length === 0 ||
            prep.length === 0)
        {
            res.send({error: true , msg: 'Title should have from 10 to 100 characters. All inputs should be filled!'})
        } else {
            next()
        }
    },

    review: (req, res, next) => {

        if(!!req.body.review) {
            const {email, review} = req.body.review

            if(!validator.validate(email)) return res.send({error: true, msg:'Email is not valid.'})
            if(review.length < 5 || review.length > 500) return res.send({error: true, msg:'Review should include from 5 to 500 characters.'})
        }

        next()

    },
}