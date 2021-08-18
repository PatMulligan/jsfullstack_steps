const express = require('express') // const doesn't allow you to re-assign a value like `let` does

const app = express()

const router = require('./router.js') // .js not necessary at end of file

// tell express to add user-submitted data onto our request object so we can access it w/ request.body
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('public'))
app.set('views','views') // first arg 'views' is an express option, second arg is the folder name we've chosen
app.set('view engine', 'ejs') // pug and handlebars are other options of templates with their own syntax

app.use('/', router) // 

app.listen(4000)