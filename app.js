const express = require('express') // const doesn't allow you to re-assign a value like `let` does

const app = express()

app.use(express.static('public'))
app.set('views','views') // first arg 'views' is an express option, second arg is the folder name we've chosen
app.set('view engine', 'ejs') // pug and handlebars are other options of templates with their own syntax

app.get('/', function(req, res) {
    res.render('home-guest')
})

app.listen(4000)