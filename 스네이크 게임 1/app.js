for(let i=0; i<100; i++) {
    const square = document.createElement("div");
    document.querySelector(".grid").appendChild(square);
}

const grid = document.querySelector(".grid");
const squares = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const scoreDisplay = document.querySelector("#score");
const width = 10;
let snake = 0; 

function start() {
    squares[snake].classList.add("snake");
    runGame()
    runGame()
}

startBtn.addEventListener("click" , start);

function runGame() {
    snake = snake + 1;
    squares[snake].classList.add("snake");
}

startBtn.addEventListener("click" , start);
