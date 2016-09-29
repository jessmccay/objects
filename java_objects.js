function isUserValid(username) {
  return username.length>=6 && !username.includes("!") && !username.includes("#") && !username.includes("$") ;
};

function isPasswordValid (pass) {
  return pass.length>=6 && pass != "password" && (pass.includes("!") || pass.includes("#") || pass.includes("$") && username != pass);
};

function areCredsValid() {
  var name = prompt("user id");
  var pass = prompt("Password");
  return isUserValid(name) && isPasswordValid(pass)
};

 function getUserCreds() {

   alert("your creds are valid " + areCredsValid());
 };




 //Purpose : Check id // password if valid return valid -- if not valid return not valid and reason why

//Signature: function , string boolean
//Example: user name: Tomlksdg! password: %jjjkjk ----> { valid: true } or username: "Jess" password: "y$o" --->{ valid: false, reason: "User ID cannot contain $"}
//Example: after you put function into console you must declare test var = checkCreds(); then ---> test.checkId --->should return if valid or if not valid + reason.
// var id1 = checkCreds(username: jessica# password: lskgj)----> id1.checkId ----> returns "not valid: cannot contain #"

function checkCreds() {
  var id = prompt("Enter user id");
  var pass = prompt("Enter password");
  return {
    checkId: function() {
      if (id.length<6){ return "Not Valid: Must be longer than 6 characters"}
      if (id.includes("#")) return "Not Valid: Cannot contain #"
     else {return "Valid " }
    //  (id.length>=6 && !id.includes("!") && !id.includes("#") && !id.includes("$"))
    // return "valid"
  }

  }
};



//Purpose:

function createCar (model, year, color) { //takes in arguments
    var speed = 0;    //starting speed
    return {
    model: model,  ///input for argument
    year: year, //input for argument
    color: color, //input for argument

    getSpeed: function() { return speed}, //when called it returns the current speed
    accelerate: function() {speed += 10}, //when called it increases speed by 10
    brake: function() { speed -= 7}, //when called this decreases speed by 7
    getNewCar: function() {
     return this.model + " " + this.year + " " + this.color // this creates string of elements of object
        },
    gas: function() {
      while (speed < 50) {           ///Loops speed increment until it reaches 50
        this.accelerate();
      };
    },
    emergencyBrake: function() {
      while(speed <= 50 && speed > 1) {           /////Loops (decreased)speed until speed reaches 1
        this.brake();
      };

      if (speed = 1 ){
        speed--             //////once speed is 1 this decreases speed by 1
      };
    }
  }
};
///////congratulations this is a beautiful code!




// Purpose increase speed to 70mph, decrease to 0 mph

function createCar (model, year, color) { //takes in arguments
    var speed = 0;    //starting speed
    return {
    model: model,  ///input for argument
    year: year, //input for argument
    color: color, //input for argument

    getSpeed: function() { return speed}, //when called it returns the current speed
    accelerate: function() {speed += 10}, //when called it increases speed by 10
    brake: function() { speed -= 7}, //when called this decreases speed by 7
    getNewCar: function() {
     return this.model + " " + this.year + " " + this.color // this creates string of elements of object
        },
    gas: function() {
      while (speed < 70) {           ///Loops speed increment until it reaches 70
        this.accelerate();
      };
    },
    emergencyBrake: function() {
      while(speed <= 70 && speed > 0) {           /////loops decrement until it reaches 0
        this.brake();
      };
    }
  }
};






//Purpose: increase to 85 mph

function createCar (model, year, color) { //takes in arguments
    var speed = 0;    //starting speed
    return {
    model: model,  ///input for argument
    year: year, //input for argument
    color: color, //input for argument

    getSpeed: function() { return speed}, //when called it returns the current speed
    accelerate: function() {speed += 10}, //when called it increases speed by 10
    brake: function() { speed -= 7}, //when called this decreases speed by 7
    getNewCar: function() {
     return this.model + " " + this.year + " " + this.color // this creates string of elements of object
        },
    gas: function() {
      while (speed < 80) {           ///Loops speed increment until it reaches 80
        this.accelerate();
          };
        if (speed = 80 ){
          speed += 5           //////once speed is 80 speed increases by 5

      };
    },
    emergencyBrake: function() {
      while(speed <= 85 && speed > 1) {           /////Loops (decreased)speed until speed reaches 1
        this.brake();
      };
      if (speed = 1 ){
        speed--             //////once speed is 1 this decreases speed by 1
      };
      }
  }
};




//Purpose: Make speed brake by random amount!!
///How many times does it take to get to 0?

function createCar (model, year, color) { //takes in arguments
    var speed = 0;    //starting speed
    return {
    model: model,  ///input for argument
    year: year, //input for argument
    color: color, //input for argument

    getSpeed: function() { return speed}, //when called it returns the current speed
    accelerate: function() {speed += 10}, //when called it increases speed by 10
    brake: function() { speed -= Math.floor(Math.random()* (speed/2)) + 1; }, //when called this decreases speed by 7
    getNewCar: function() {
     return this.model + " " + this.year + " " + this.color // this creates string of elements of object
        },
    gas: function() {
      while (speed < 80) {           ///Loops speed increment until it reaches 80
        this.accelerate();
          };
        if (speed = 80 ){
          speed += 5           //////once speed is 80 speed increases by 5

      };
    },
    emergencyBrake: function() {
      this.brake();                ///we are directly using the brake function
      // };

      }
  }
};


//Purpose: Make speed brake by random amount!!
///How many times does it take to get to 0?  This version uses a counter

function createCar (model, year, color) { //takes in arguments
    var speed = 0;    //starting speed
    return {
    model: model,  ///input for argument
    year: year, //input for argument
    color: color, //input for argument

    getSpeed: function() { return speed}, //when called it returns the current speed
    accelerate: function() {speed += 10}, //when called it increases speed by 10
    brake: function() { speed -= Math.floor(Math.random()* (speed/2)) + 1; }, // This will call random number to be decrease per brake
    getNewCar: function() {
     return this.model + " " + this.year + " " + this.color // this creates string of elements of object
        },
    gas: function() {
      while (speed < 80) {           ///Loops speed increment until it reaches 80
        this.accelerate();
          };
        if (speed = 80 ){
          speed += 5           //////once speed is 80 speed increases by 5

      };
    },
    emergencyBrake: function() {
      var counter = 0
      while(speed <= 85 && speed > 0) {           /////Loops (decreased)speed until speed reaches 0
        this.brake();           // this will call brake fucntion
        counter ++             // increase 1 per cycle of loop
      console.log(counter)    // print the number of counter value
      };
  }
}
};
