/**
 * PART 2 of Manipulating DOM using Vanilla JS
 * 
 * 
 * Part 1 main topics: JS selector types, manipulating content and style using JS  
 * 
 * TOPICS covered in this script: 
 * 
 * Traversing the DOM: 
 *  Querying DOM nodes that are either Parent, Child, or siblings (adjacent nodes in the DOM levels)
 * 
 * 
 */

/******************************************************************* */
/* Querying the PARENT nodes: 
*/

/* scenario: select all the items in the ul and store in a variable 
*/

// let itemList = document.querySelector('#items');

/* the .parentNode property
*/

// console.log(itemList.parentNode); // this will select the parent node of element with id - #items. In this case the div container for ul

/* you can use this property and change the content or style of the parent node
 for example: 
 */

 //itemList.parentNode.style.backgroundColor = 'lime'; // this will change the bg color of the div container

/* You can keep chaining this property like shown below 
*/

//console.log(itemList.parentNode.parentNode); // see js_dom.html file and reason what will this output 


/* The .parentElement property is interchangeable with .parentNode property 
*/

// console.log(itemList.parentElement);


/**************************************************************************************** */

/*Querying the CHILD nodes
  the .childNodes property -- returns a NodeList (similar to a array)
*/

//console.log(itemList.childNodes);

/* IMP NOTE: notice the output of the above in the console and see that this returns a "text" node 
   The text node represents whitespaces, or linebreaks/newlines in the page.
  
   The above property with its text nodes will make traversal challenging as you have to clean or skip the text nodes
*/

/* ALTERNATIVE -- the property .children
*/

//console.log(itemList.children); // This returns an HTMLCollection (not a NodeList), and it does not have text nodes

/* NOTE: the above is an HTMLCollection.
   It is not an array-like. If you want to apply array methods to process it, you will have to convert it as such.
*/ 


/*ACCESS a specific child node: 
*/

//console.log(itemList.children[1]);

/* modify content or style after selection: 
*/

//itemList.children[1].style.backgroundColor = 'beige';


/* The .firstChild property: 
   REASON first by yourself what you think you should get as output. Then 
   Take note of the output 
*/

//console.log(itemList.firstChild); 

/* notice how you get a text node (because the way the HTML is coded) and not the first li item in the ul
 So in practicality, this does not help much 
 */


/* ALTERNATIVE -- firstElementChild
*/

//console.log(itemList.firstElementChild); // notice how this gives the first li item in the ul and not a text node

/* Using this as a selector you can manipulate the content or style 
*/

//itemList.firstElementChild.textContent = 'Changed content using JS';

/* Similarly you have .lastChild and .lastElementChild -- Try it out yourself.
*/


/***************************************************************************************************** */


/*SIBLING or ADJACENT nodes 
*/


/* The .nextSibling  
*/

// console.log(itemList.nextSibling); // node you will get a text node. This is also owing to the nature of HTML file we are using. 

/* The .nextElementSibling 
*/

// console.log(itemList.nextElementSibling); // no text nodes. Also if there is no  "NEXT" sibling you get back null.


/* The .previousSibling
*/

// console.log(itemList.previousSibling);

/* The .previousElementSibling
*/
// console.log(itemList.previousElementSibling); // this is going to give you the PREVIOUS sibling i.e. h2 tag




/**
 * 
 * CREATING ELEMENTS AND INSERTING THEM INTO THE DOM USING JS
 * 
 */


/* the createElement('') method
*/

// let variableNewElementDiv = document.createElement('div');

//console.log(variableNewElementDiv);

/* Add identifier or class names to your new element 
*/

// variableNewElementDiv.className = 'my-custom-js-div-class';
// variableNewElementDiv.id = 'my-custom-js-div-id'

/* add attributes 
*/

// variableNewElementDiv.setAttribute('alt', 'added a div using JS');
// variableNewElementDiv.setAttribute('title', 'div element create using JS');


// console.log(variableNewElementDiv);

/* to add content inside your div -- create a text node 
*/

// let variableNewDivText = document.createTextNode('I am adding some text to my dynamic div node using a text node');

/* append the text node  to your div node as a child
*/

// variableNewElementDiv.appendChild(variableNewDivText);


// console.log(variableNewElementDiv);


/* PUSH this above content now and display it on your page.
   Locate the area in the existing DOM where you want to insert this new element that you created. 
   Suppose you want to insert it as a child of the header element in between the existing div and h1 nodes <see html file>
*/

/* locate and save the existing nodes: 
*/

// let divContainer = document.querySelector('header .container');
// let h1Node = document.querySelector('header h1'); 

/* insert your custom element 
   using method -- .insertBefore(nodeToInsert, beforeWhichNodeYouWantToInsert)
*/

// divContainer.insertBefore(variableNewElementDiv, h1Node);

// variableNewElementDiv.style.fontSize = '30px'; // you can manipulate style and content of your custom element like any other element in the DOM 









