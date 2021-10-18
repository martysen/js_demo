
/************************************************************************************************** */
// CONDITIONAL STATEMENTS 

// SIMPLE IF STATEMENTS 
const variableIF = 20;

if (variableIF == 20) {
    console.log('if statement value is equals 20');
}

// IMPORTANT PROG. NOTE: DIFFERENCE BETWEEN == AND ===
// == does not match the datatype i.e. if const varName = '10' or const varName = 10, if (varName == 10) will return true for both cases 
// === matches both the value and the data type. therefore in the previous statement the if condition with varName = '10' will be false.
// Note - always safe to use ===. 


// IF ELSE
if (variableIF === 21) {
    console.log('Inside the IF condition');
    
} else {
    console.log('Inside the ELSE condition');
    
}

// IF ELSE IF chain
if (variableIF === 5) {
    console.log('varibale is equal to number 5');    
}   else if (variableIF > 10) {
    console.log('variable is greater than number 10');
} 
else {
    console.log('variable is less than or equal to number 10 but not equal to number 5');    
}

// COMBINING MULTIPLE CONDITIONS - LOGICAL OPERATORS
// != (not equal to), !== (not equal to value and type), 
// && logical AND, || logical OR, ! logical NOT 
// Try yourself -- write an IF ELSE statement to check if a value is between 5 and 10 


// TERNARY OPERATOR: A SHORTHAND IF USED TO ASSIGN VALUE TO VARIABLES BASED ON A CONDITION
// syntax: variablename = (condition) ? value1:value2; // value1 is assigned if condition is true else value2 is assigned
// Example: Say you want to set a boolean variable to true (or false) if the age of a person is 18 or above 
let citizenAge = 17;
const canVote = (citizenAge >= 18 ) ? true:false;
// The above statement is interpreted as: (IF condition true) THEN (?) set value 1 ELSE (:) set value 2
console.log(canVote);

// SWITCH CASE STATEMENTS 
// NOTE: case keys can be strings. You can write case 'colorName': ....
const userChoice = 2;
switch (userChoice) {
    case 1: console.log('User choose the first item');
        break; // don't forget the break statements or you'll get logical errors
    case 2: console.log('User choose the 2nd item');        
        break;
    default: console.log('User choose neither 1st or 2nd Item. Check input value');
        break;
}
