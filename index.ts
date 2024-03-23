#! /usr/bin/env node
import inquirer from "inquirer" ;
const answer = await inquirer.prompt ([
    {
         message : "Enter First Number" , type : "number", name : "firstNumber"
     },
     {
          message : "Enter Second Number" , type : "number", name : "secondNumber"
     },
     {
          message : "Select One  of the operators to perform Operation",
          type : "list" ,
          name : "operator",
          choices : ["Addition + " , "Substraction - ", "Multiplication * ", "Division / "] ,     
     },

]);
console.log(answer);
if (answer.operator === "Addition + "){
     console.log(answer.firstNumber + answer.secondNumber );
}
else if (answer.operator === "Substraction - "){
     console.log(answer.firstNumber - answer.secondNumber );
}
else if (answer.operator === "Multiplication * "){
     console.log(answer.firstNumber * answer.secondNumber );
}
else if (answer.operator === "Division / "){
     console.log(answer.firstNumber / answer.secondNumber );
} else{
     console.log ("please Enter a valid Operator")
}
