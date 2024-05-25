#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`Hello! Welcome to SHARIQ's ATM`);
let myBalance = 10000;
let Pin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    }
]);
if (pinAns.pin === Pin) {
    console.log(`Verified!`);
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select One Option",
            type: "list",
            choices: ["Deposit", "Withdraw", "Fast Cash", "Check Balance", "Transfer"]
        }
    ]);
    if (operationAns.Operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Please Enter Amount",
                type: "number",
            }
        ]);
        if (amountAns.Amount > myBalance) {
            console.log(`Insufficient Balance!`);
        }
        else {
            myBalance -= amountAns.Amount;
            console.log(`Withdrawal Successful! Remaining Balance ${myBalance}`);
        }
    }
    else if (operationAns.Operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
    else if (operationAns.Operation === "Fast Cash") {
        let fast = await inquirer.prompt([
            {
                name: "Fastcash",
                message: "Select the amount you withdraw",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.Fastcash;
        console.log(`Successfully Withdrawed ${fast.Fastcash}! Remaining Balance ${myBalance}`);
    }
    if (operationAns.Operation === "Deposit") {
        let method = await inquirer.prompt([
            {
                name: "PaymentMethod",
                message: "Please Select Payment Method",
                type: "list",
                choices: ["Easy Paisa", "Jazz Cash", "Payeer", "PayPal"]
            }
        ]);
        if (method.PaymentMethod === "Easy Paisa") {
            let number = await inquirer.prompt([
                {
                    name: "Number",
                    message: "Please Enter your Number",
                    type: "number"
                }
            ]);
            let amount = await inquirer.prompt([
                {
                    name: "Amount",
                    message: "Please Mention Amount",
                    type: "number",
                }
            ]);
            myBalance += amount.Amount;
            console.log(`You have successfully deposit ${amount.Amount}! Your Current Balance is ${myBalance}`);
        }
        else if (method.PaymentMethod === "Jazz Cash") {
            let number1 = await inquirer.prompt([
                {
                    name: "Number1",
                    message: "Please Enter your Number",
                    type: "number",
                }
            ]);
            let amount1 = await inquirer.prompt([
                {
                    name: "Amount1",
                    message: "Please Mention Amount",
                    type: "number",
                }
            ]);
            myBalance += amount1.Amount1;
            console.log(`You have successfully deposit ${amount1.Amount1}! Your Current Balance is ${myBalance}`);
        }
        else if (method.PaymentMethod === "Payeer") {
            let number2 = await inquirer.prompt([
                {
                    name: "Number2",
                    message: "Please Enter your Account Number",
                    type: "number",
                }
            ]);
            let amount2 = await inquirer.prompt([
                {
                    name: "Amount2",
                    message: "Please Mention Amount",
                    type: "number",
                }
            ]);
            myBalance += amount2.Amount2;
            console.log(`You have successfully deposit ${amount2.Amount2}! Your Current Balance is ${myBalance}`);
        }
        else if (method.PaymentMethod === "PayPal") {
            let number3 = await inquirer.prompt([
                {
                    name: "Number3",
                    message: "Please Enter your Account Number",
                    type: "number",
                }
            ]);
            let amount3 = await inquirer.prompt([
                {
                    name: "Amount3",
                    message: "Please Mention Amount",
                    type: "number",
                }
            ]);
            myBalance += amount3.Amount3;
            console.log(`You have successfully deposit ${amount3.Amount3}! Your Current Balance is ${myBalance}`);
        }
    }
    else if (operationAns.Operation === "Transfer") {
        let method2 = await inquirer.prompt([
            {
                name: "Method2",
                message: "Select Your Method",
                type: "list",
                choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash", "PayPal", "Payeer"]
            }
        ]);
        if (method2.Method2 === "Bank Transfer") {
            let username = await inquirer.prompt([
                {
                    name: "Username",
                    message: "Enter Username",
                    type: "string | number"
                }
            ]);
            let account = await inquirer.prompt([
                {
                    name: "AccountNo",
                    message: "Enter your Account Number",
                    type: "number",
                }
            ]);
            let amount4 = await inquirer.prompt([
                {
                    name: "Amount4",
                    message: "Please Enter Your Amount",
                    type: "number",
                }
            ]);
            myBalance -= amount4.Amount4;
            console.log(`Transfered ${amount4.Amount4} to ${username.Username}. Remaining Balance ${myBalance}`);
        }
        else if (method2.Method2 === "Easy Paisa") {
            let username5 = await inquirer.prompt([
                {
                    name: "Username5",
                    message: "Enter Username",
                    type: "string | number"
                }
            ]);
            let account5 = await inquirer.prompt([
                {
                    name: "AccountNo5",
                    message: "Enter your Account Number",
                    type: "number",
                }
            ]);
            let amount5 = await inquirer.prompt([
                {
                    name: "Amount5",
                    message: "Please Enter Your Amount",
                    type: "number",
                }
            ]);
            myBalance -= amount5.Amount5;
            console.log(`Transfered ${amount5.Amount5} to ${username5.Username5}. Remaining Balance ${myBalance}`);
        }
        else if (method2.Method2 === "Jazz Cash") {
            let username6 = await inquirer.prompt([
                {
                    name: "Username6",
                    message: "Enter Username",
                    type: "string | number"
                }
            ]);
            let account6 = await inquirer.prompt([
                {
                    name: "AccountNo6",
                    message: "Enter your Account Number",
                    type: "number",
                }
            ]);
            let amount6 = await inquirer.prompt([
                {
                    name: "Amount6",
                    message: "Please Enter Your Amount",
                    type: "number",
                }
            ]);
            myBalance -= amount6.Amount6;
            console.log(`Transfered ${amount6.Amount6} to ${username6.Username6}. Remaining Balance ${myBalance}`);
        }
        else if (method2.Method2 === "Payeer") {
            let username7 = await inquirer.prompt([
                {
                    name: "Username7",
                    message: "Enter Username",
                    type: "string | number"
                }
            ]);
            let account7 = await inquirer.prompt([
                {
                    name: "AccountNo7",
                    message: "Enter your Account Number",
                    type: "number",
                }
            ]);
            let amount7 = await inquirer.prompt([
                {
                    name: "Amount7",
                    message: "Please Enter Your Amount",
                    type: "number",
                }
            ]);
            myBalance -= amount7.Amount7;
            console.log(`Transfered ${amount7.Amount7} to ${username7.Username7}. Remaining Balance ${myBalance}`);
        }
        else if (method2.Method2 === "PayPal") {
            let username8 = await inquirer.prompt([
                {
                    name: "Username8",
                    message: "Enter Username",
                    type: "string | number"
                }
            ]);
            let account8 = await inquirer.prompt([
                {
                    name: "AccountNo8",
                    message: "Enter your Account Number",
                    type: "number",
                }
            ]);
            let amount8 = await inquirer.prompt([
                {
                    name: "Amount8",
                    message: "Please Enter Your Amount",
                    type: "number",
                }
            ]);
            myBalance -= amount8.Amount8;
            console.log(`Transfered ${amount8.Amount8} to ${username8.Username8}. Remaining Balance ${myBalance}`);
        }
    }
}
else {
    console.log(`Incorrect Pin Code! Please Enter Correct Pin Code.`);
}
