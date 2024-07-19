//Write a function that prompts the user to input student marks. 
//imports readline module for command line
const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function gradeGenerator(grade) {
// Select the grade range
//these are the ranges providedA > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
     if (grade > 79 && grade <= 100) {
        return 'A';
    } else if (grade >= 60 && grade <= 79) {
        return 'B';
    } else if (grade >= 50 && grade <= 59) {
        return 'C';
    } else if (grade >= 40 && grade <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
//asks the user to key-in the mark
//we convert the input which is a string to a number

r1.question("Please keyin your marks: ", function (input) {
    const mark = Number(input);

//if the variable mark is not a number or greater than 100 or less than 0
//it outputs an error message and asks the user to try again
//if its in the correct data type it now calls the function gradegenerator and passes the value mark to it
//it then gives you the grade
    if (isNaN(mark) || mark > 100 || mark < 0) {
        console.log("ERROR: Please try again using numeric values");
    } else {
        const grade = gradeGenerator(mark);
        console.log("Your grade is  " + grade);
    }

    r1.close();
});