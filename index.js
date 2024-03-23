#! /usr/bin/env node
// =============== Calculator ====================//
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
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
    {
        type: 'list',
        name: 'operator',
        message: 'Select your desired opration',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    },
]);
// conditional statement;
if (answer.operator === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log('Invalid Operator');
}
