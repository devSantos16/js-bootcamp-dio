var left_button = document.getElementById("left_button");
var right_button = document.getElementById("right_button");

right_button.addEventListener("click", incrementNumber);
left_button.addEventListener("click", decrementNumber);



var elemento = {
    number: document.getElementById("number")
};

function incrementNumber() {
    var number = Number(elemento.number.innerHTML);
    if (number >= 10) {
        return;
    }
    elemento.number.innerHTML = number + 1;
    verify_number(Number(elemento.number.innerHTML))
}

function decrementNumber() {
    var number = Number(elemento.number.innerHTML);
    if (number <= -10) {
        return;
    }
    elemento.number.innerHTML = number - 1;
    verify_number(Number(elemento.number.innerHTML))
}

function verify_number(number) {
    if (number < 0) {
        elemento.number.style = "color: red";
        return;
    }
    if (number == 0) {
        elemento.number.style = "color:black";
        return;
    }
    elemento.number.style = "color:green";
}