// Import the readline module to handle user input from the command line
const readline = require('readline');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE (Pay As You Earn) tax based on salary
function myPaye(grossSalary) {
    let paye = 0;
    // If salary is 24,000 or less, tax is 10% of the salary
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } 
    // If salary is between 24,000 and 32,333, tax is 10% of 24,000 plus 25% of the amount above 24,000
    else if (grossSalary <= 32333) {
        paye = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } 
    // If salary is above 32,333, tax is calculated in three bands
    else {
        paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.30);
    }
    return paye;
}

// Function to calculate NHIF (National Hospital Insurance Fund) deduction based on salary ranges
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;   
    if (grossSalary <= 7999) return 300;  
    if (grossSalary <= 11999) return 400;  
    if (grossSalary <= 14999) return 500; 
    if (grossSalary <= 19999) return 600;  
    if (grossSalary <= 24999) return 750;  
    if (grossSalary <= 29999) return 850;  
    if (grossSalary <= 34999) return 900;  
    if (grossSalary <= 39999) return 950; 
    if (grossSalary <= 44999) return 1000; 
    if (grossSalary <= 49999) return 1100; 
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300; 
    if (grossSalary <= 79999) return 1400; 
    if (grossSalary <= 89999) return 1500; 
    if (grossSalary <= 99999) return 1600; 
    return 1700;  // Deduction for salary above 99,999
}

// Function to calculate NSSF (National Social Security Fund) deduction based on salary
function calculateNSSF(grossSalary) {
    // NSSF is 6% of gross salary, capped at 1,080
    return Math.min(grossSalary * 0.06, 1080);
}

// Main function to prompt user for salary and benefits, and calculate deductions
rl.question("What is your basic Salary: ", function(basicSalaryInput) {
    rl.question("What amount do you get in benefits: ", function(benefitsInput) {
        // Convert user inputs to numbers
        const myBasicSalary = parseFloat(basicSalaryInput);
        const myTotalBenefits = parseFloat(benefitsInput);

        // Check if inputs are valid numbers
        if (isNaN(myBasicSalary) || isNaN(myTotalBenefits)) {
            console.log("Invalid input. Please enter numeric values."); // Error message for invalid input
            rl.close();  // Close the readline interface
            return;
        }

        // Calculate gross salary by adding basic salary and benefits
        const grossSalary = myBasicSalary + myTotalBenefits;
        // Calculate PAYE, NHIF, and NSSF deductions
        const paye = myPaye(grossSalary);
        const nhif = calculateNHIF(grossSalary);
        const nssf = calculateNSSF(grossSalary);
        // Calculate net salary after deductions
        const netSalary = grossSalary - (paye + nhif + nssf);

        // Print salary breakdown
        console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
        console.log(`PAYE (Tax): KES ${paye.toFixed(2)}`);
        console.log(`NHIF Deduction: KES ${nhif.toFixed(2)}`);
        console.log(`NSSF Deduction: KES ${nssf.toFixed(2)}`);
        console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);

        // Close the readline interface
        rl.close();
    });
});
