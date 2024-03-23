#! /usr/bin/env node
// =============== Calculator ====================//
console.log("Welcome To Simple CLI Calculator :");
import inquirer from 'inquirer'
const permission = await inquirer.prompt([
    {
        type: 'string',
        name: 'password',
        message: 'Enter Password :',
    },
]);

let pass :string  = 'fly$';
if (permission.password === pass){
    while (true){
        const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'operator',
            message: 'Select your desired opration',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            type: 'number',
            name: 'firstNumber',
            message: 'Enter First Number :',
        },
        {
            type: 'number',
            name: 'secondNumber',
            message: 'Enter second Number :',
        },
    ]);
    
    
    
    // conditional statement;
    
        if(answer.operator === 'Addition'){
            console.log("The Addition of ",answer.firstNumber, "and",answer.secondNumber ,"is :",answer.firstNumber + answer.secondNumber); 
        }else if(answer.operator === 'Subtraction'){
            console.log("The Subtraction of ",answer.firstNumber, "and",answer.secondNumber ,"is :",answer.firstNumber - answer.secondNumber); 
        }else if(answer.operator === 'Multiplication'){
            console.log("The Multiplication of ",answer.firstNumber, "and",answer.secondNumber ,"is :",answer.firstNumber * answer.secondNumber); 
        }else if(answer.operator === 'Division'){
            if (answer.secondNumber === 0) {
                console.log('Cannot divide by zero');
            } else {
                console.log("The Division of ",answer.firstNumber, "and",answer.secondNumber ,"is :",answer.firstNumber / answer.secondNumber);
            }
        }else{
            console.log('Invalid Operator');
        };

    const ask = await inquirer.prompt([
        {
            type : 'list',
            name : 'response',
            message: 'Do you want to Continue or Exit ?',
            choices : ['Continue', 'Exit']
        }
    ]);
    if (ask.response === 'Exit') {
        console.log('Goodbye!');
        break;
    }else {
        continue;
    }
}}
else
    {
     console.log('Wrong password ! Try again ');
}