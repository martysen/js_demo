//define an object and associate it to the HTML element you want to interact with
const para = document.querySelector('p');

//define your event and create a function call 
para.addEventListener('click', enterName);

// define your function 
function enterName() {
    let name = prompt('Enter Your Name');
    para.textContent = 'Player 1:' + name;
}

