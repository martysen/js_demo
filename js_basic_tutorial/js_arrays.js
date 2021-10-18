
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