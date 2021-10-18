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

// object destructuring - pulling out object's keys in actual variables
const { firstName, lastName} = student1;
console.log(firstName); // being used independent of the object name 



