#! /usr/bin/env node

import inquirer from "inquirer"

console.log(`Hello! Welcome to SHARIQ's ATM`);

let myBalance = 10000;
let Pin = 1234;
let pinAns = await inquirer.prompt([
    {
        name : "pin",
        message: "Enter Your Pin",
        type: "number",
    }
]);
if(pinAns.pin === Pin) {
    console.log(`Verified!`);

    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select One Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        }
    ]);
    if(operationAns.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Please Enter Amount",
                type: "number",
            }
        ]);
        if(amountAns.Amount > myBalance) {
            console.log(`Insufficient Balance!`)
        } else {
            myBalance -= amountAns.Amount;
            console.log(`Withdrawal Successful! Remaining Balance ${myBalance}`);
        }
        
    } else if(operationAns.Operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
} 

else {
    console.log(`Incorrect Pin Code! Please Enter Correct Pin Code.`)
}
