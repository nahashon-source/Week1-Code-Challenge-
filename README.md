This code challenge has three parts namely; grade calculator ,speed calculator and tax calculator

project setup 1 You will need to clone this repository using this link: git@github.com:nahashon-source/Week1-Code-Challenge-.git
2 Any version of node.js

1 grade calculator This JavaScript program, speedcalculator.js, calculates merit points based on the given speed input. If the speed is within the legal limit, it returns 'Ok'. If the speed exceeds the limit, it calculates merit points using a specific formula. If the merit points exceed 12, it indicates that the license is suspended. Here's a breakdown of what the code does:

function speedcalculator() :This function checks the input speed against the legal speed limit and calculates merit points accordingly. Here's how it works: If the speed is 70 or below, it returns 'Ok'. If the speed exceeds 70, it calculates merit points using the formula merit = ((speed - 70) / 5). If merit points are greater than 12, it returns 'License suspended'. Otherwise, it returns the calculated merit points.

How to Run the Code: 1 type console.log(speedcalculator()) In the code 2 open your terminal 3 Run the file using Node.js: node speedcalculator.js.

The program will output the appropriate message based on the input speed value.

2 Grade Calculator This JavaScript program, gradeCalculator.js, calculates the grade based on the given marks input. The program evaluates the marks and assigns a corresponding grade ranging from 'A' to 'E'. Invalid marks outside the range of 0 to 100 are handled with an error message.

Function The function calculatingGrade() constains switch statements that are able to correctly grade a student by using the marks provided.On default the code will print out "Unable to calculate grade, please input your marks." when no marks are inserted but will print out "Invalid input, kindly provide valid marks." when the marks are above 100 or below 0.

How to run the code 1 Ensure you have Node.js installed on your system. 2 Run the file using Node.js: node gradeCalculator.js in your terminal

The program will output the calculated grade based on the input marks value.

3 tax calculator This JavaScript program, taxCalculator.js, computes various deductions including PAYE, NHIF, and NSSF based on the provided gross salary and then provides you with the net salary.

Functions taxCalculator(): This is the main function that calculates PAYE, NHIF, and NSSF deductions based on the gross salary. Here's how it works: 1 payecalculator(): Is a nested function that calculates PAYE based on different tax brackets. 2 NSSFCalculator(): Is anested function that calculates NSSF deductions (6% of the gross salary). 3 nhifCalculator(): Is a nested function that calculates NHIF deductions using a switch statement with various salary brackets. 4 The function computes total taxes (PAYE + NHIF + NSSF) and the net salary. 5 Returns a formatted message containing gross salary, NHIF, PAYE, NSSF, total taxes, and net salary

How to run the code 1 Ensure you have Node.js installed on your system. 2 Run the file using Node.js: node taxCalculator.js in your terminal

By changing the grossSalary value, you can see how different gross salaries impact the calculated deductions.

Author & Lincense Nahashon Mwendwa