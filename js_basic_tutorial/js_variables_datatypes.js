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