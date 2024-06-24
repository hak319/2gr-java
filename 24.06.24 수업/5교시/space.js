const stageSize = 15;

for(let i=0; i < stageSize*stageSize; i++){
    const box = document.createElement("div");
    document.querySelector(".grid").appendChild(box);
}

const grid = document.querySelector(".grid");
const stage = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("startBtn");
const stopBtn = document.querySelector("#stopBtn");
const display = document.querySelector("#display");

let playerLoc = stageSize*(stageSize-2)+7

function makePlayer() {
    stage[playerLoc].classList.add("player");
 }
makePlayer()

function movePlayer(e) {
    stage[playerLoc].classList.remove("player");
    switch (e.keyCode) {
        case 37: 
            if(playerLoc % stageSize !== 0) {playerLoc--;}
            break;
        case 39:
            if(playerLoc % stageSize < stageSize-1) {playerLoc++;}
            break;
    }
    stage[playerLoc].classList.add("player");
}

document.addEventListener("keyup" , movePlayer)

let invaderLoc = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]
let gameInterval;

function makeInvader() {
    invaderLoc.forEach(function(invader) {
        stage[invader].classList.add("invader");
    })
}
makeInvader();

function moveInvader() {}

interval = setInterval(moveInvader, 1000);