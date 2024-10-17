// document.querySelector("body").innerHTML = "<h1>PROVA</h1>"

//input value
let password = "";

//input
const input = document.querySelector('#password');
//validators
const length = document.querySelector('#length'); 
const uppercase = document.querySelector('#uppercase'); 
const number = document.querySelector('#number'); 
const special = document.querySelector('#special');
//progress
const img = document.querySelector('#img');
const message = document.querySelector('#message');

//listener for the input that changes the password value when we change the input value
input.addEventListener('input', function() {
    password = input.value;
    console.log(password);

    let count = 0;

    //length validator
    if (password.length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
        count++;
    } else {
        length.classList.remove('valid');
        length.classList.add('invalid');
    }

    //uppercase validator
    //regex that selects from A to Z
    //.contains() doesn't support regex in his argument
    if (/[A-Z]/.test(password)) {
        uppercase.classList.remove('invalid');
        uppercase.classList.add('valid');
        count++;
    } else {
        uppercase.classList.remove('valid');
        uppercase.classList.add('invalid');
    }

    //number validator
    //regex that selects from 0 to 9
    //.contains() doesn't support regex in his argument
    if (/[0-9]/.test(password)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
        count++;
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    //special characters validator
    //regex that selects all the special characters
    //.contains() doesn't support regex in his argument
    //another variant is /[^a-zA-Z0-9]/, ^ means "not"
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        special.classList.remove('invalid');
        special.classList.add('valid');
        count++;
    } else {
        special.classList.remove('valid');
        special.classList.add('invalid');
    }

    //img switch
    img.src = './assets/progress-' + count + '.png'

    // messages switch
    if (count === 0) {
        message.textContent = "You're just getting started, keep pushing!";
    } else if (count === 1) {
        message.textContent = "You're gaining strength, don't stop now!";
    } else if (count === 2) {
        message.textContent = "Halfway there! You can do this!";
    } else if (count === 3) {
        message.textContent = "Champion! You've lifted it all the way!";
    } else if (count === 4) {
        message.textContent = "Damn...";
    }
})