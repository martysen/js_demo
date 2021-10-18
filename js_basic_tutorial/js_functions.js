

/******************************************************************************************************************************* */

// FUNCTIONS

// BASIC FUNCTIONS

// define function body
function sum(parameter1, parameter2) {
    console.log(`Sum of two input values are: ${parameter1 + parameter2}`);    
}
// function call
sum(2,3);

// function body with default parameter values 
function sumDefault(para1 = 2, para2 = 6) {
    console.log(`Sum of two input values to sumDefault() are: ${para1 + para2}`);    
}
sumDefault(); // Although no arguements given it will still return 8 as result
// If you give values, it will overwrite the default values 
sumDefault(20,40);

// Prog Note : For demo of syntax, we have used console.log in the function body. But usually functions will end with a return statement
function multiplyTwoNumbers(inputVal1, inputVal2) {
    return inputVal1*inputVal2;
}
console.log(`The multiple of two values using function is ${multiplyTwoNumbers(8,9)}`); 


// The Arrow Function : introduced in ES 6. A cleaner and compact way to create functions 
// Below is an example of a division method written using the arrow function 
const divisionOutput = (divisionInput1 = 1, divisionInput2 = 1) => {
    return divisionInput1 / divisionInput2;
} 
console.log(`The division output is ${divisionOutput(10,2)}`);

// Prog. NOTE: Read this for more info - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// At the begining this may be a bit challenging. If you are not comfy, then use traditional way. But remember => is basically a function

// Note - you can even get rid of the curly brackets and return keyword when using => function. 
// You can even get rid of the () brackets if you have a single parameter
const divisionOutputAlternative = (divisionInput1 = 1, divisionInput2 = 1) => divisionInput1 / divisionInput2; 
console.log(`The arrow function alternative compact syntax output without {} and return statement is ${12,2}`);

// Note that if you use return statement with => function you need the {} brackets to enclose the body of the function

// Example Scenario: 
// Say you want to define a function that will take as input a single boolean parameter and check if the parameter is true or false 
// if it is true it will print the variable is true, else it will print false 
const validateVariable = inputParameter => { // we need these {} here since it is a multi-line function body
    if (inputParameter) {
        console.log(`The given variable is ${inputParameter}`); // you can replace this with the return statement 
    } else {
        console.log(`The given variable is ${inputParameter}`);
    }
}
const validateVariableInput = true;
validateVariable(validateVariableInput);

// Try Yourself -- Think of some more function bodies and try defining them with the => syntax
