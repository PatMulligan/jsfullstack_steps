const express = require('express') // const doesn't allow you to re-assign a value like `let` does

const app = express()

app.get('/', function(req, res) {
    res.send("Welcome to your new app")
})

app.listen(4000)