const readline = require('readline');

// Creating an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for the speed of the car
rl.question("What is the speed of the car: ", function(answer) {
    // Convert input string to a floating-point number
    const speed = parseFloat(answer);
    const speedLimit = 70;  // Speed limit in km/h
    const pointsPer5km = 5; // Number of km/h over speed limit that corresponds to 1 demerit point
    const maxPoints = 12;   // Maximum number of demerit points before license is suspended

    // Check if the input is a valid number
    if (isNaN(speed)) {
        console.log("You have not entered the values in the correct datatype. Please try again");
    } else if (speed < speedLimit) {
        // Speed is below the limit, print "Ok"
        console.log("Ok");
    } else {
        // Calculate demerit points based on how much the speed exceeds the limit
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPer5km);
        if (demeritPoints > maxPoints) {
            // If demerit points exceed the maximum allowed, print "License suspended"
            console.log("License suspended");
        } else {
            // Otherwise, print the total number of demerit points
            console.log("Points: " + demeritPoints);
        }
    }

    // Close the readline interface
    rl.close();
});
