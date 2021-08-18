// relevant code for user features of example app

// import models/User.js constructor function
const User = require('../models/User')

// node knows when it sees `exports.var_name` to add a property named "var_name" 
// to the exported object 
 
exports.login = function() {

}

exports.logout = function() {
}

exports.register = function(req, res) {
    let user = new User(req.body) // create a new object of a User using the constructor
    console.log(user.data) // this property is created in the User() constructor of User.js
    user.register()
    res.send("Thanks for trying to register")
}

exports.home = function(req, res) {
    res.render('home-guest')
}