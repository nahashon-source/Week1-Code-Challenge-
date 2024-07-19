//Write a program that takes the speed of a car as input e.g 80. 
//If the speed is less than 70, it should print “Ok”.
// Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.

//> For example, if the speed is 80, it should print: 
//“Points: 2”. If the driver gets more than 12 points, the function should print:
// “License suspended”.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//these are the requirements given 
//its defined as const cause they dont change
//it asks the user to write the speeed in km/h
//the answer is converted from a string to float so as to carry out mathematical operations
rl.question("What is the speed of the car: ", function(answer) {
    const speed = parseFloat(answer);
    const speedLimit = 70;
    const pointsPer5km = 5;
    const maxPoints = 12;

//ensures that the speed in is the correct data type
//if not it returns invalid input
//else it continues to run
    if (isNaN(speed)) {
        console.log("You have not entered the values in the correect datatype. Please try again");
    } else if (speed < speedLimit) {
        console.log("Ok");
    } else {
// it subtracts the speed from the speed limit
//the floor returns the greatest integer less than or equal to its numeric argument.
//the output returned is the divided by 5
//if output is greater than 12(maxPoints) it prints license suspended
//if not it prints the total points
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPer5km);
        if (demeritPoints > maxPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }

    rl.close();
});