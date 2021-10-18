
/******************************************************************************************************************************* */

// JS and OBJECT ORIENTED PROGRAMMING 

// CREATING OBJECTS WITH CONSTRUCTOR FUNCTIONS 
// 1. CONSTRUCTOR FUNCTION WITH PROTOTYPES 
// 2. ES6 CLASSES

// OBJECTS USING CONSTRUCTOR FUNCTION 
// Prog. Note: When you use a constructor function, the function name must start with a capital letter 

// Declare the custom constructor
function Professor(profFirstName, profLastName, profDateOfBirth) {
    this.profFirstName = profFirstName;
    this.profLastName = profLastName;
    this.profDateOfBirth = profDateOfBirth;
}

// Instantiate object or create an object that will use the constructor above
const professor1 = new Professor('John','Wick','06-09-1987');
console.log(professor1);
// You can create as many objects as you want with different values with your custom constructor 

// PROG NOTE: you can instead of presenting any date as a string type represent it as a date type using inbuild Date constructor 
function Staff(staffFirstName, staffLastName, staffDateOfBirth){
    this.staffFirstName = staffFirstName;
    this.staffLastName = staffLastName;
    this.staffDateOfBirth = new Date(staffDateOfBirth);
}

const staff1 = new Staff('Mary','Scott','03-21-1985');
console.log(staff1);
console.log(staff1.staffDateOfBirth.getFullYear()); // Calling on methods of the Date object

// More on Date : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date


// The above two constructors only has properties. You can also add methods (functions inside a class/constructor) to your constructor definition
function Employee(empFirstName, empLastName, empSalary, empJobTitle){
    this.empFirstName = empFirstName;
    this.empLastName = empLastName;
    this.empSalary = empSalary;
    this.empJobTitle = empJobTitle;

    this.getAnnualBonus = function() {
        return (this.empSalary * 0.02);
    }
}

// instantiate object of employee 
const employee1 = new Employee('King','Arthur','60000','EE');
// check if object is created 
console.log(employee1);
// call method associated with the object.
console.log(`The annual bonus of ${employee1.empFirstName} ${employee1.empLastName} is ${employee1.getAnnualBonus()}.`);

// Try youself -- create some more method and try it out 
// for example, create a method that return full name of the employee 


// Protyping -- removing the method declaration from the body of the constructor 
/*
In the previous example of the constructor if you want to keep the methods and properties separate. You can use prototyping like shown below 

function Person(para1,para2){
    //properties
    this.para1 = para1;
    this.para2 = para2;
}

// prototype your methods 
Person.protoype.getFullName = function(){
    return (this.para1 + this.para2);
}

//instantiate an obj
const person1 = new Person('ab','xy');
console log -- person1.getFullName();

*/


// ES 6 ONWARDS CLASSES WERE INTRODUCED TO JS
// Prog. Note -- CLASSES syntactically does the same thing as discussed in the previous multi-line comment i.e. it uses prototype methods

/**
 * class Employee {
    constructor(empFirstName, empLastName, empSalary, empJobTitle) {
        this.empFirstName = empFirstName;
        this.empLastName = empLastName;
        this.empSalary = empSalary;
        this.empJobTitle = empJobTitle;
        }

    getAnnualBonus() {
            return (this.empSalary * 0.02);
    }
}

//Everything else w.r.t object instantiation remains the same. 
// Thus, the class syntax makes it easier for devs instead of dealing with method prototyping syntax in JS 
 * 
 */

