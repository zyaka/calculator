let num1;
let op;
let triggerCompute = false;

function prep(op_in) {
    op = op_in;
    num1 = document.getElementById("num").value;
    document.getElementById("num").value = "";
    if (triggerCompute)
        compute();
    triggerComputer = true;

}


function compute(symbol) {
    if (symbol) {
        triggerCompute = false;
    }
    let num2 = document.getElementById("num").value;

    switch (op) {
        case "+":
            document.getElementById("num").value = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            document.getElementById("num").value = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            document.getElementById("num").value = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            document.getElementById("num").value = parseFloat(num1) / parseFloat(num2);
            break;

        default:
            break;
    }

}

const numClick = (num_in) => {
    document.getElementById("num").value += num_in;
    console.log(num_in);
}