// relevant code for user features of example app


// node knows when it sees `exports.var_name` to add a property named "var_name" 
// to the exported object 
 
exports.login = function() {

}

exports.logout = function() {
}

exports.register = function(req, res) {
    console.log(req.body) // username is the name attribute of the input tag in the HTML form
    console.log(req.body.username)
    console.log(req.body.email)
    res.send("Thanks for trying to register")
}

exports.home = function(req, res) {
    res.render('home-guest')
}