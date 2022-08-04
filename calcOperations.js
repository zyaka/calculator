let a;
let b;

const add = function(a, b) {
    return parseFloat(a) + parseFloat(b)
}




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('First number?', number => {
    a = number;
    console.log(a);
});

readline.question('Second number?', number => {
    b = number;
    console.log(b);
});

readline.close();

// console.log(a, b);