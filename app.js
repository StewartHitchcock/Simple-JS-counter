let number = 0;

function increase() {
    number = number + 1;
    document.getElementById("counter").innerHTML = number;
    console.log(number);
}   

function decrease() {
    number = number - 1;
    document.getElementById("counter").innerHTML = number;
    console.log(number);
}

function reset() {
    number = 0;
    document.getElementById("counter").innerHTML = number;

}