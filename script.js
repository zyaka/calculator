let a = 1;
let b = 2;
const add = function(a, b) {
    let result = parseFloat(a) + parseFloat(b);
    return result;
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const digits = document.querySelector('button');