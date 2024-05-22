#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.blue.bold("\n \t Welcome to 'Almas Kanwal Arain' - Currency Convertor\n"));

let exchange_rate: any = {
    "USD": 1,   
    "JYP": 113,
    "EUR": 0.9,
    "AUD": 1.65,
    "CAD": 1.3,
    "PKR": 278.55,
}

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "JYP", "EUR", "AUD", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "JYP", "EUR", "AUD", "CAD", "PKR"] 
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the Amount to Convert:", 
    }
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount 

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`Converted Amount = ${chalk.magenta(converted_amount.toFixed(2))}`);