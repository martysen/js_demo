/*The basics components of the JavaScript Language*/

/*
    List of topics covered in this script: 
    1. variables and datatypes 
    2. Arrays 
    3. Object Literals 
    4. Methods for strings, arrays, objects, etc.
    5. Loops - for, while, for...of, forEach, map
    6. Conditionals statements - if-else, ternary, switch-case 
    7. Functions (normal functions and arrow functions)
    8. OOP (prototypes and classes)
    9. DOM selection & DOM manipulation 
    10. Events 
    11. Basic Form Validation
*/

// Note that for some of these basics we will be observing the output from the
// browser console and at times we will be using node.js

// ****************************************************************************************
// DISPLAY OUTPUT

// Different ways to show output on the browser 
// In your browser, open dev tool and go to console to check out the following output

console.error('This is an error!');

console.warn('this is a warning!');

console.log('this is a console log');

// You can also output using the following but you should avoid it as it suspends loading of rest of the script
//window.alert('Yo how are you doing ?');

// ****************************************************************************************

// JS VARIABLES
// Three main types of variables -- var, let, const 
// var is not used too much now since it is globally scoped 
// let and const were added with ECMAScript 6 and 7 in 2015. 
// let and const have block-level scope and as such does not creates the conflicts 
// which var can create. 
// Programming note - do not use var. 

// let allows you to reassign values and const does not. 
let age = 21;
// let allows reassign of value. if you had declared const this would throw an error 
age = 41;
console.log(age);

// const 
const PI = 3.14;
// Prog. Note - you have to initialize with a value if you declare const type variables
// trying to reassign a const will throw an error
//PI = 5; 

// Programming note - if you are not going to reassign the value of a variable, always use const as a good practice.
// programming note - do not use reserved keywords for variable names - just like in any other language.

// *******************************************************

// JS DATATYPES -- 
// primitive data types (directly assigned to the memory and is not a resource) - string, numbers, boolean, null, undefined, symbol (added in ES 6)
const myName = 'John'; // string
const myAge = 21; // number 
const myGPA = 4.5 // float value, but data type is still number 
const isSenior = true; // boolean
const myHobby = null; // null type - shows its empty; absence of value
const enrollmentStatus = undefined; // undefined type initialized explicitly. IF you don;t initialize a let variable it will be implicitly set to undefined. 
let myFavSong; // This will be implicitly set to undefined since there is no initialization


// Figuring out the data type of variables - using typeof
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof myGPA);
console.log(typeof isSenior);
console.log(typeof myHobby);  // NOTE here even though typeof shows object type, it is INCORRECT! Read up on typeof null data type for JS on the web
console.log(typeof enrollmentStatus);
console.log(typeof myFavSong);

// non-primitive types - arrays and object literals etc. to be covered in their respective topics

// *******************************************************************************

// TYPE - string 

// concatenations - old ways 
console.log('The student name is '+ myName + ' and their age is ' + myAge);

// Newer ways - TEMPLATE strings or template literals -- introduced in ES 6.
console.log(`The student name is ${myName} and their age is ${myAge}`); // note the use of `` (backticks - which makes it a template string) and ${}

// you can also assign template strings to other variables. Remember - normal ticks are strings and backticks are template strings 
const studentInfo = `The student name is ${myName} and their age is ${myAge}`;
console.log(studentInfo);

// some string properties and methods 

const stringExample = 'Harry Potter';

// find out how many characters are there in a string 
console.log(stringExample.length); // NOTE here if you use - var.abc; abc is called a property. If you use var.abc(); then abc is called a method 

// change case. for example to upper case or lower case
console.log(stringExample.toUpperCase()); // here we are using a method of string type object
console.log(stringExample.toLowerCase());

// print a substring(startIndex, endIndex)
console.log(stringExample.substring(0,5));

// you can add other methods and properties to substring 
console.log(stringExample.substring(0,5).toUpperCase());

// split a string and store as an array -- .split(parameter)
console.log(stringExample.split('')); // this will store letter by letter. The method parameter is how you want to split
console.log(stringExample.split(' ')); // this will split by whitespace
// prog. note - use case of split -- to store hashtags or tags of posts and store in DB and search posts based on tags 

// *********************************************************************************************
// ARRAYS : VARIABLES THAT STORE MULTIPLE VALUES GROUPED UNDER A GIVEN LABEL/NAME

// create method 1: Use of Array Constructor (not used that often)
 const myValues = new Array(1,2,3,4,5,6); // revise if you don;t remember constructors
 console.log(myValues);

 // create method 2: 
 const chipsBrands = ['Lays','Dorritos','Ruffles'];
 console.log(chipsBrands);

 // IMP NOTE - JS arrays can hold different data types in the same array 
//  In some other languages, you will have to set the data type of the array and size of the array before you can initialize it 
 const studentRecordArray = ['John','Doe',21, true, 3.2];
 console.log(studentRecordArray);

 // Prog. note: Notice how when you declare variables you don't specify its type - const myName = ''; This is because JS is not Statically Typed. 
 // If you want to static type i.e. const myName:string = ''; You can use the language called TYPESCRIPT, a superset of JS with more stricter rules 

// Access a specific array index 
// Prog. Note -- Arrays start from index 0, IN EVERY LANGUAGE !!!
console.log(studentRecordArray[0]);

// Prog. note -- you can manipulate values of a const array and you can add new values to it. However, you cannot reinitialize it. 
// The following statement will throw an error 
//studentRecordArray = [];

// However, these following statements will not 
studentRecordArray[5] = 'CSI 2520';
studentRecordArray[0] = 'Jane';
console.log(studentRecordArray);


// Array Insertion - Add to the end of the array
// Many a times you may not know the last index of a large array.
// In such cases it is easier to use the PUSH() method of array type
studentRecordArray.push('Interactive Web Systems');
console.log(studentRecordArray);

// Array Insertion - Add to the start of the array - UNSHIFT()
studentRecordArray.unshift('G-12021');
console.log(studentRecordArray);

// Array deletion - Remove the last item in the array - POP()
studentRecordArray.pop();
console.log(studentRecordArray);

// Check if a variable is an array 
console.log(Array.isArray(studentRecordArray)); // will return true
console.log(Array.isArray(stringExample)); // will return false

// Extract the index of an array value 
console.log(studentRecordArray.indexOf('Doe'));
console.log(studentRecordArray.length); // returns size of array 

// Concatenate Two Ararys - .concat(array,....)
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // expected output: Array ["a", "b", "c", "d", "e", "f"]

//*************************************************************/

// OBJECT LITERALS
// Key-value pairs 

const student1 = {
    // add primitive data types
    firstName: 'John',
    lastName: 'Doe',
    gpa: '3.0',
    age: 21,
    // add arrays 
    courses: ['CSI 2520','CSI 1420','CSI 3450'],
    // add object within an object -- nested 
    address: {
        street: '115 Library Drive',
        city: 'Rochester',
        zip: '48309'
    }
}

// print the whole object 
console.log(student1);
// print specific key from object - use dot operator 
console.log(student1.firstName);
console.log(student1.firstName, student1.lastName, student1.courses[0], student1.address.zip);

// object destructuring - pulling out object's keys in actual variables -- ES 6 onwards
const { firstName, lastName} = student1;
console.log(firstName); // being used independent of the object name 

//pulling out embedded objects / nested objects 
const { address: { city }} = student1;
console.log(city);

// Adding more keys/properties to existing objects
student1.email = 'johnDoe@yahoo.com'
console.log(student1.email);


// dealing with ARRAYS OF OBJECTS 
// declare array in the normal way 
const todoList = [
    // first array item is an object, so enclose in {} then specify its key-values
    {
        id: 1,
        item: 'get coffee beans',
        isCompleted: true
    },
    // add some more objects separated by comma
    {
        id: 2,
        item: 'clean room',
        isCompleted: true
    },
    {
        id: 3,
        item: 'complete phase 1 report',
        isCompleted: false
    }

];
console.log(todoList);

// access a specific item from the to do list 
console.log(todoList[1].item);

/********************************************************************************************** */
// the JAVASCRIPT OBJECT NOTATION or JSON
// IMPORTANT PROGRAMMING NOTE - JSON IS NOT SAME AS JS OBJECT LITERALS
// IT IS VERY IMP. TO KNOW THE DIFFERENCE - READ THE TOP ANSWER HERE - https://stackoverflow.com/questions/2904131/what-is-the-difference-between-json-and-object-literal-notation

// JSON is a data format used very frequently in Full-stack dev. using APIs sending data to server and back

// Copy the todoList array above i.e. everything including [...]
// goto an online json convertor website resource like https://www.freeformatter.com/json-formatter.html
// see the output pasted below 

// IMPORTANT TO NOTE IN JSON - 
// 1. ALL KEY NAME IS ENCLOSE IN DOUBLE QUOTES -- IF YOU NOT DO THIS IT WILL FLAG AN ERROR 
// 2. IN VALUES, ANYTHING THAT IS STRING IS IN DOUBLE QUOTES 

/*
[
    {
       "id": 1,
       "item": "get coffee beans",
       "isCompleted": true
    },
    {
       "id": 2,
       "item": "clean room",
       "isCompleted": true
    },
    {
       "id": 3,
       "item": "complete phase 1 report",
       "isCompleted": true
    }
 ]
 
 */

 // IMPORTANT - NOW HOW TO DO THIS SAME COVERSION OF JS OBJECT TO JSON IN JS CODE? 
 // when sending data to a server, this method can be used.
 const todoListJSON = JSON.stringify(todoList); 
 console.log(todoListJSON);



 /********************************************************************************************************************************* */

 // LOOPS

 // for loops 
for (let index = 0; index < 10; index++) {
    console.log(`For Loop Iteration number ${index}`);
}
// Note -- try accessing the index variable outside of the for loop code block like below. It will throw an error
//console.log(index);
// But now instead of using let, declare index with var and try the previous statement and see the difference.

// while loops
let indexOfWhileLoop = 0;
while (indexOfWhileLoop < 10) {
    console.log(`While Loop Iteration number ${indexOfWhileLoop}`);
    indexOfWhileLoop++; // do not forget these or you will goto to infinity and beyond!
}


// Looping through object literals 
for (let index = 0; index < todoList.length; index++) {
    console.log(`My todo list item# ${index+1} is ${todoList[index].item}`);    
}

// Looping through arrays - the Forof loops 
for (let todoItem of todoList) { // todoItem is a variable name for the iterator - you can name it anything 
    console.log(todoItem);
    
}

/******************************************************************************************************** */
// High order array methods to iterate through arrays 
// 1. forEach
// 2. map - create a new array from an existing array 
// 3. filter - create a new array from an existing array based on certain conditions 

// forEach
/*
arrayName.forEach( function(variableName, otherParameters) {
    //body of loop
});
Note - These can be also coded with the arrow functions =>
*/
console.log('My item list of todo item printed using forEach is as follows:');
todoList.forEach(function(todoItem){
    console.log(todoItem.item);
});

// map : returns an array 
// Say you want to create an array containing only the item descriptions of your todo list
const listItems = todoList.map( function(todoItem) {
    return todoItem.item;
});
console.log(`My todo items generated using the map method is: ${listItems}`);

// filter: returns array based on criteria
// say you want to create an array where the isCompleted is true and map it to a new array 
const listItemsCompleted = todoList.filter( function(todoItem){
    return todoItem.isCompleted === true;   // NOTE HOW WE USED ===. There is a difference between == and === shown in the next segment of conditional statements
}).map(function(todoItem){      // note how we have added another method to the end of a method
    return todoItem.item;
})
console.log(`To do items that are completed printed using Array.filter().map() are: ${listItemsCompleted}`); // this will not show the third item since it is false. 

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
    return divisionInput1 / divisionInput2
} 
console.log(`The division output is ${divisionOutput(10,2)}`);

// Prog. NOTE: Read this for more info - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// At the begining this may be a bit challenging. At begining if you are not comfy use traditional way. But remember => is basically a function










