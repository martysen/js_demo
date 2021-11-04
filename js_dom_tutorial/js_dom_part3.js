/**
 * 
 *  PART 3 of Manipulating DOM using Vanilla JS
 * 
 * 
 * Part 2 main topics: Navigating the DOM - parent, children, and siblibing nodes. And creating and inserting custom elements in the DOM
 * 
 * TOPICS covered in this script: 
 * 
 * EVENTS - Interactive JS 
 * 
 * 
 */

/**
 * Scenario - Changes you need to make to your js_dom.html file: 
 * Add the following HTML elements as the nextSibling of the ul element 
 * -- A button <see HTML file for changes>
 * 
 */

/**
 * Writing a custom function called from the HTML file through an inline event
 */
// function buttonClicked() {
//     alert('Hello World from My Custome JS function~');
// }


/**
 * EVENT LISTENERS
 * you don't want to use inline way of creating events anymore. (WHY?)
 * Now we use what is known as event listners. 
 * This is done by grabbing the elements from the HTML using methods such as .querySelector etc. and adding the events to it 
 */
let demoButton = document.querySelector('#demoButton');
// console.log(demoButton);

/**
 * Add an event listener which is basically a method 
 * .addEventListener(param1, param2)
 * param1 is a string and is the type of event you want to add - like 'click'
 * param2 is a function body [i.e. inline] (or function name call) which is executed when the associated event takes place
 */
// demoButton.addEventListener('click', function () {
//     console.log('successfully add a click type event listener to the demo button');
// })

/**
 * Alternately to the above way you can (and should) call a function name like shown below
 */
//  demoButton.addEventListener('click', buttonClicked);

/**
 * With Event listeners you can combine everything you have learned till now and do all of them
 * That is on a button click, you can modify content or style of existing elements in the DOM, OR 
 * create and insert new elements in the DOM and so on. 
 * The possibilities are limited only by your imagination. 
 * NOTE: granted we are only scratching the surface here. But once you understand the basic you can read up others events 
 * and figure out what to do with them. This requires practice. 
 * https://developer.mozilla.org/en-US/docs/Web/Events
 * 
 * HOWEVER, below is a list of popular events that you should be familiar with for starters 
 * -- https://data-flair.training/blogs/javascript-event-types/
 * 
 */

// demoButton.addEventListener('click', modifyMyDOM);

// function modifyMyDOM() {
//     let pageHeader = document.querySelector('#main-header');
//     pageHeader.textContent = 'This content is now changed~';
//     // We can chain the methods to the selector. 
//     document.querySelector('.container').style.backgroundColor = '#c4c';
    
// }


/**
 * Understanding the EVENT PARAMETER
 * Since we are calling a function when adding event listeners, we can add parameters 
 * This parameter here is called an event parameter.
 * In the example below, I am representing it as a character 'e'. You can call it whatever you want
 * 
 */

// demoButton.addEventListener('click', modifyMyDOM);

// function modifyMyDOM(e) {
    // console.log(e); // check out properties of event parameters

    /* lets see some of these properties*/
    // console.log(e.target); // element the event is fired from
    // console.log(e.target.id); // get the id of the elem
    // console.log(e.target.className); // get the class name of the elem
    // console.log(e.target.classList); // Get the entire class list

    /**Lets do some fun stuff. Goto the HTML file and Add a div element in the HTML between ul and this button
     * I have given it an id value of #randomDiv
     * Now, interpret the following lines of code. 
     * Self Exercise - instead of creating the div in the .html file, do it here in JS.
     */
    // let randomDiv = document.querySelector('#randomDiv');
    // randomDiv.innerHTML = `<h2>The name of the id of the button below is ${e.target.id}</h2>`;
    // randomDiv.style.backgroundColor = '#f4f';


    // console.log(e.type); // type of event 
    // console.log(e.clientX); // position of mouse on X axis [width from browser left side window]
    // console.log(e.clientY); // position of mouse on Y axis from top of window
    // console.log(e.offsetX); // postion of mouse from actual element i.e. here it is the button
    // console.log(e.offsetY); // Y postion from the element 

    // console.log(e.altKey); // are you holding down the ALT key down when clicking? 
    // console.log(e.ctrlKey); // holding down ctrl
    // console.log(e.shiftKey); // shift key? --You can use this with IF-ELSE to different things if it is a shift click or alt click etc
// } // end of modifyMyDOM(e)



/**
 * Understanding different mouse events
 * 
 * 
 */

// function runEvent(e) {
//     console.log(`EVENT TYPE is ${e.type}`);
// }

/**THE SINGLE CLICK */
// demoButton.addEventListener('click', runEvent);

/**THE DOUBLE CLICK */
// demoButton.addEventListener('dbclick', runEvent);

/**THE  CLICK down */
// demoButton.addEventListener('mousedown', runEvent);

/**THE  click release */
// demoButton.addEventListener('mouseup', runEvent);


/**
 * SOME OTHER TYPES OF EVENTS. 
 * We need a different element for this. CAnoot use buttons only
 * HTML Change: 
 * goto to HTML file and add the commented lines of code in the HTML file for this part.
 */

/**Grabbing the div box we created in the HTML file */
let randomDivBox = document.getElementById('randomDivBox');

// randomDivBox.addEventListener('mouseenter', runEvent); // checking if your mouse enters the box area; increments a counter everytime it does.
// randomDivBox.addEventListener('mouseleave', runEvent); // checking if your mouse leaves the box area; increments a counter everytime it does.
// randomDivBox.addEventListener('mouseover', runEvent); // checking if hover over a content inside this box; increments a counter everytime it does.
// randomDivBox.addEventListener('mouseout', runEvent); // checking if your mouse leaves a content inside this box; increments a counter everytime it does.
// randomDivBox.addEventListener('mousemove', runEvent); // if you are moving the mouse in the box area; increments a counter everytime it does.

/**
 * What can we do with these events? 
 * Lets output the mouse positions inside the randomDiv we created 
 */


// function logMousePositionsInDom(e) {
//     let randomDiv = document.querySelector('#randomDiv');
//     console.log(`EVENT TYPE IS: ${e.type}`);
//     randomDiv.innerHTML = `<h3>Mouse Position X is: ${e.offsetX} <br> Mouse Position Y is: ${e.offsetY} </h3>`;
// }
// randomDivBox.addEventListener('mousemove', logMousePositionsInDom);

/**
 * What else can we do with these events? 
 * Lets do some sylvester styling.
 */

//  function styleWithMousePositionsInDom(e) {
//     //let randomDiv = document.querySelector('#randomDiv');
//     console.log(`EVENT TYPE IS: ${e.type}`);
//     /**Connect the offset x and y to RED and Green values of color coding */
//     randomDivBox.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 25)`;
//     /**Taking this a step further  */
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 25)`;
    
// }
// randomDivBox.addEventListener('mousemove', styleWithMousePositionsInDom);


/**
 * KEYBOARD AND INPUT EVENTS 
 * WORKING WITH FORMS AND TEXTBOXES * 
 * 
 */

/**Grab the input element of text type and the form in JS variable*/

let inputText = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

/**Add event listners - keydown */
// inputText.addEventListener('keydown', runInputTextEvent); 

// function runInputTextEvent(e) {
    // console.log(`EVENT TYPE: ${e.type}`); // each time you type it will fire the event and increment counter 

    /**Grab what is being typed i.e. the value */
    // console.log(e.target.value);

    /**Take contnet and populate to DOM */
    // let randomDiv = document.querySelector('#randomDiv');
    // randomDiv.innerHTML = `<h3>${e.target.value}</h2>`;
// }

/**Other Key EVENTS - keyup when you let go of the key */
// inputText.addEventListener('keydown', runInputTextEvent); //Try yourself
// inputText.addEventListener('kepress', runInputTextEvent); 


/**FOCUS AND BLUR events */
/**FOCUS fires when you select the target element i.e. its in focus  */
/**BLUR fires when you deselect the target element i.e. its no longer in focus hence blurred */
/**Please remember FOCUS and BLUR has NOTHING to do with styling aspects. Its about element selection and deselection */
// inputText.addEventListener('focus', runInputTextEvent); 
// inputText.addEventListener('blur', runInputTextEvent); 


/**CUT and PASTE events 
 * if you cut something from the text box it fires cut 
 * if you paste something to the box it fires paste.
*/
// inputText.addEventListener('cut', runInputTextEvent); 
// inputText.addEventListener('paste', runInputTextEvent); 


/**The Input Event 
 * This fires when you do anything with an input element
 * i.e. it combines all the previous events for keypress, cut paste etc. into one
 * so if you don't need to distinguish, you can simply use input
 * 
 */
// inputText.addEventListener('input', runInputTextEvent); 



/**
 * WORKING WITH the <SELECT> element inside the <form> from HTML using JS
 * 
 * ADD the select elem that is commented out in the HTML code
 */

let selectElement = document.querySelector('select');

/**Add a CHANGE event */
// selectElement.addEventListener('change', runSelectEvent); // instead of change you can also use input
// selectElement.addEventListener('input', runSelectEvent); // comment above and try this out and see what happens


// function runSelectEvent(e) {
//     console.log(`The EVENT TYPE is: ${e.type}`);
//     console.log(`The VALUE selected is ${e.target.value}`);
// }



/**
 * THE SUBMIT event -- fires on form <or what you can submit>
 * 
 */

// form.addEventListener('submit', runSubmitEventOnForm);

// function runSubmitEventOnForm(e) {
//      e.preventDefault(); // prevent default behavior of submit btn, submitting to the page. Once you do this you will notice the btn doesn't reset.
//      console.log(`THE EVENT TYPE IS : ${e.type}`); // without the above; this would vanish pretty quick to notice.
// }