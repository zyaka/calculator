let a = 1;
let b = 2;

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const digits = document.querySelectorAll('button');

digits.forEach(digit => {
    digit.addEventListener('click', function() {

    })
})


var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
document.write(num + "?! That's my favorite number too!");
document.querySelector("h1").innerHTML = "Hey YOU";
document.querySelector("#output").innerHTML = "Hello " + name + "!";

// // Prints out the variable type.write("Name is a " + typeof name);
// document.write("Num is a " + typeof num);