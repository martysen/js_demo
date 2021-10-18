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