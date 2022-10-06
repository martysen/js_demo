const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr.concat(arr2);
console.log(arr3);

const studentRecord = ["john", "doe", 3.43, 21];
studentRecord.push("jane", "doe", 3.6, 20);
studentRecord.unshift("g-1145");
studentRecord.pop();
console.log(studentRecord);

// .forEach()
arr3.forEach((item) => {
  console.log(item);
});

// .map():
const arr4 = arr3.map((item) => {
  return item * 2;
});
console.log(arr4);

// .filter()
const arr5 = arr3.filter((item) => {
  if (item % 2 == 0) {
    console.log(`The number ${item} is even`);
    return item;
  } else {
    console.log(`The number ${item} is odd`);
  }
});
console.log(arr5);

// functions
//simple function
function addNumbers(param1, param2) {
  return param1 + param2;
}
const addResult = addNumbers(2, 7);
console.log(`The result of addition is ${addResult}`);

// arrow functions
const addResult1 = (param1, param2) => param1 + param2;
console.log(addResult1(14, 2));

// object literals

const student1 = {
  firstName: "John",
  lastName: "Doe",
  gpa: 3.42,
  age: 21,
  courses: ["web design", "algorithm", "data structure", "python"],
  address: {
    street: "115 library drive",
    city: "Rochester",
    state: "MI",
    zip: 48309,
  },
};
console.log(student1.address.zip);

// destructuring an obj
const { firstName, lastName } = student1;
console.log(firstName);

//destructuring nested obj
const {
  address: { zip },
} = student1;
console.log(zip);

//insertion
student1.email = "john@ou.edu";
console.log(student1.email);

// array of objects; arr = [item1, item2, ....]
const todoList = [
  {
    id: 1,
    description: "finish homework 1",
    isCompleted: false,
  },
  {
    id: 2,
    description: "clean room",
    isCompleted: true,
  },
  {
    id: 3,
    description: "take out trash",
    isCompleted: true,
  },
];

todoList.filter((item) => {
  if (item.isCompleted) {
    console.log(`${item.description}`);
  }
});

const todoListJSON = JSON.stringify(todoList);
console.log(todoList);
console.log(todoListJSON);

// custom constructor
function Professor(pFirstName, pLastName, pDoB) {
  this.pFirstName = pFirstName;
  this.pLastName = pLastName;
  this.pDoB = pDoB;
}

const professor1 = new Professor("john", "wick", "1974-2-2");

class Employee {
  constructor(empFirstName, empLastName, empSalary, empJobTitle) {
    this.empFirstName = empFirstName;
    this.empLastName = empLastName;
    this.empSalary = empSalary;
    this.empJobTitle = empJobTitle;
  }
  getAnnualSalaryBonus() {
    return this.empSalary * 0.05;
  }
}

const emp1 = new Employee("andrew", "johnson", 75000, "Admin");
console.log(emp1);
console.log(emp1.getAnnualSalaryBonus());
