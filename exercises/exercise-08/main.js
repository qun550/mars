/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

let grayBtn = document.getElementById("grayButton");
let whiteBtn = document.getElementById("whiteButton");
let blueBtn = document.getElementById("blueButton");
let yellowBtn = document.getElementById("yellowButton");


// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "gray";
}

function switchToWhite() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";
}

function switchToBlue() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
    body.style.color = "white";
}

function switchToYellow() {
    console.log("hello");
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
    body.style.color = "blue";
}



// 2 -- Add an event listener to each circle
grayBtn.addEventListener("click", switchToGray);
whiteBtn.addEventListener("click", switchToWhite);
blueBtn.addEventListener("click", switchToBlue);
yellowBtn.addEventListener("click", switchToYellow);