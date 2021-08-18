// Lec. 49 at 7m
let User = function(data) {
    // when calling the constructor we use `user = new User()`
    // the new keyword creates an empty object named user, from which the constructor is being called
    // therefore the `this` keywork here points to that object, essentially saying user.homePlante = "earth"
    //this.homePlanet = "earth"

    this.data = data //note the variable name to store data can be whatever

    // This is the trivial way of adding a method to a constructor
    // better to use the <Constructur>.prototype.<method name> below
    //this.jump = function() {} //remove this in favor of User.prototype.jump
}

// more efficient way to add a method to a constructor
// this way the fct doens't get stored in memory for every instance of the Model created
//User.prototype.jump = function() {}

User.prototype.register = function() {
    // enforce all of our business logic here
    console.log("new user registered")
}

// to be able to leverage this function from our userController file:
module.exports = User