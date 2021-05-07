const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const mainRouter = require('./router/recipesRouter.js')

mongoose.set('useCreateIndex', true)

app.listen(8000)
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => {
        console.log('Connection was successful')
    })
    .catch(e => {
        console.log('Error while connecting to db')
    })

app.use(['/'], mainRouter)