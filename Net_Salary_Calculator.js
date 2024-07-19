//inports readline to this file
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// PAYE Calculation Function
//if grossSalary is less than or equal to 24k, then we get paye by multiplying 10% of grossSalary

//if grossSalary is less than or equal to 32333, then we get 10% of 24k 
//we then subtract 24k from grossSalary and get 25% of it
//get paye by adding the two values
function myPaye(grossSalary) {
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else {
        paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.30);
    }
    return paye;
}

// NHIF Calculation Function
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
    return 1700;
}

// NSSF Calculation Function
function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1080);
}

// the main Function
//asks the user to input his/her salary
//asks the user to keyin the benefits
//passes the figures to a function that checks the data type of the figures

rl.question("What is your basic Salary: ", function(basicSalaryInput) {
    rl.question(" what amount do you get in benefits: ", function(benefitsInput) {
        const myBasicSalary = parseFloat(basicSalaryInput);
        const myTotalBenefits = parseFloat(benefitsInput);

//checks is the figure given is in the correct datatype(num)
//if not then the code terminates and asks the user to key in the correct figures in the reqired data type

        if (isNaN(myBasicSalary) || isNaN(myTotalBenefits)) {
            console.log("Invalid input. Please enter numeric values.");
            rl.close();
            return;
        }
//
        const grossSalary = myBasicSalary + myTotalBenefits;
        const paye = myPaye(grossSalary);
        const nhif = calculateNHIF(grossSalary);
        const nssf = calculateNSSF(grossSalary);
        const netSalary = grossSalary - (paye + nhif + nssf);

        console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
        console.log(`PAYE (Tax): KES ${paye.toFixed(2)}`);
        console.log(`NHIF Deduction: KES ${nhif.toFixed(2)}`);
        console.log(`NSSF Deduction: KES ${nssf.toFixed(2)}`);
        console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);

//closes readline to stop any input
        rl.close();
    });
});