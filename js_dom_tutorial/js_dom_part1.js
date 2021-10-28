/*
    This tutorial File covers the basic of using JS with the DOM API for client side JS
    The objective of these code snippets is to understand how JS can be used to introduce interactivity to your websites.

    Pre-requisite: Studentds are expected to know HTML, CSS, and the Document Object Model (DOM)

    In this script, we will cover the following JS based DOM selector concepts: 

    1. document.getElementById()
    2. document.getElementsByClassName()
    3. document.getElementsByTagName()
    4. document.querySelector()
    5. document.querySelectorAll()

    These concepts fall into the technological category called Vanilla JS
*/

// Section 1: Examine the Document Object Model

// List all properties and methods of document object

// console.dir(document);

// Checking out some document properties
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.images); // and many more 
//console.log(document.links);
// Dynamic changes without touching html
// Following will change the title of your page
// document.title = 'testing changes';
*/



// Section 2: Query the DOM - selectors 

// getElementById()
// let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
// console.log(document.getElementById('header-title'));

// Change content dynamically using .textContent 
// headerTitle.textContent = 'Hello World with .textContent';

// Another Way - .innerText
// headerTitle.innerText = 'Hello World with .innerText'

// Difference: One allows to modify styling 

// Say in your HTML you add the following code to the h1 tag
// <span style="display:none"> Peek-a-boo</span>
// Now run the following code 

//console.log(headerTitle.textContent); // You'll notice the hidden text. textContent ignores styling

// However if you run the following: 
//console.log(headerTitle.innerText); // You'll see that is accepts styling


// .innerHTML ==> put some element inside another DOM element
// The following code puts and h5 tag inside the h1 tag

//headerTitle.innerHTML = '<h5> Hello in h5 inside h1 tag </h5>';

/******************************************** */
// Change CSS Styles
// Programming note: you have to use camel case for style properties

// headerTitle.style.backgroundColor = '#221111';



/***************************** */
// getElementsByClassName('')
// Say you want to select all the list items 
// class name is list-group-item

// let listItems = document.getElementsByClassName('list-group-item');
//console.log(listItems); // check if you got the HTMLCollection

//listItems[1].textContent = 'I Changed this using JS';
//listItems[1].style.fontSize = '40px';

// However note you cannot do this: 

// listItems.style.backgroundColor = '#f4f4f4'; // error 

// Why - listItems is a HTMLCollection -- you have to loop
// for (let index = 0; index < listItems.length; index++) {
//     listItems[index].style.backgroundColor = '#f4f4f4';
    
// }



/******************************************** */
// getElementsByTagName('')

// Do the same thing in the above section but with tag name li
// let liTags = document.getElementsByTagName('li');


/********************************************** */
// document.querySelector(); // use only for one item
// if there is more than one item, only grabs first one

// The parameter is specified in CSS style within ''
// so - #id, .class, h1, etc

// select by id 
// let headerElement = document.querySelector('#main-header');
// headerElement.style.borderBottom = 'solid 4px #000000';

// select by element name 
// let inputText = document.querySelector('input');
// inputText.value = 'Cheese';

// Note in the above, querySelector ignored the second input element

// SPECIFy any CSS type selectors 
// let submitBtn = document.querySelector('input[type="submit"]');
// submitBtn.style.backgroundColor = '#c23399';
// submitBtn.value = 'SEND';


// Default grabs the first item in a collection or class itens
// let items = document.querySelector('.list-group-item');
// items.style.color = 'blue';

// Grab the last item using psuedo element CSS selector 
// let itemsLast = document.querySelector('.list-group-item:last-child');
// itemsLast.style.color = 'blue';

// Color even items only  -- note something interesting here in the output 
// it will only color the first even item -- why?
// let evenItems = document.querySelector('.list-group-item:nth-child(even)');
// evenItems.style.backgroundColor = 'red';



/************************************************** */
// .querySelectorAll(''); // multiple items

// let h2Titles = document.querySelectorAll('.titles');
// console.log(h2Titles); // these are nodelist and you can apply array methods on it

// try the nth-child(odd) with this method
// remember you get a NODELIST -- you need to iterate

















