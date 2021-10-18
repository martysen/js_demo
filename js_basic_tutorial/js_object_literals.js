
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

