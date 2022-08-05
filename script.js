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

//console log test

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your name ? ', function(name) {
//     rl.question('Where do you live ? ', function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on('close', function() {
//     console.log('\nBYE BYE !!!');
//     process.exit(0);
// });

// Gets user input
var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
document.write(num + "?! That's my favorite number too!");
document.querySelector("h1").innerHTML = "Hii";
document.querySelector("#output").innerHTML = "Hello " + name + "!";

// // Prints out the variable type.write("Name is a " + typeof name);
// document.write("Num is a " + typeof num);