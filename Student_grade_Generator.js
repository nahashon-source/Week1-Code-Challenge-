// Import the readline module to handle command line input
const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Define a function to generate a grade based on marks
function gradeGenerator(grade) {
    // Determine the grade based on the mark range
    if (grade > 79 && grade <= 100) {
        return 'A'; // Grade A for marks above 79
    } else if (grade >= 60 && grade <= 79) {
        return 'B'; // Grade B for marks between 60 and 79
    } else if (grade >= 50 && grade <= 59) {
        return 'C'; // Grade C for marks between 50 and 59
    } else if (grade >= 40 && grade <= 49) {
        return 'D'; // Grade D for marks between 40 and 49
    } else {
        return 'E'; // Grade E for marks below 40
    }
}

// Prompt user to enter their marks
r1.question("Please keyin your marks: ", function (input) {
    // Convert input to a number
    const mark = Number(input);

    // Check if the input is a valid number within the range
    if (isNaN(mark) || mark > 100 || mark < 0) {
        console.log("ERROR: Please try again using numeric values"); // Error message for invalid input
    } else {
        // Call the gradeGenerator function to get the grade
        const grade = gradeGenerator(mark);
        console.log("Your grade is  " + grade); // Output the grade
    }

    // Close the readline interface
    r1.close();
});
