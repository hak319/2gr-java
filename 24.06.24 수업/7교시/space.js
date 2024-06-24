const stageSize = 15;

for(let i = 0; i < stageSize * stageSize; i++) {
    const box = document.createElement("div");
    document.querySelector(".grid").appendChild(box);
}

const grid = document.querySelector(".grid");
const stage = document.querySelectorAll(".grid div");
const startBtn = document.querySelector("#startBtn"); 
const stopBtn = document.querySelector("#stopBtn"); 
const display = document.querySelector("#display");

let playerLoc = stageSize * (stageSize - 2) + 7;
let invaderLoc = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];
let gameInterval;
let bulletId;
let bulletLoc = playerLoc;
let killsLoc = [];

function moveBullet() {
    stage[bulletLoc].classList.remove("bullet");
    bulletLoc -= stageSize;
    stage[bulletLoc].classList.add("bullet");
}
function moveInvader(){
    invaderLoc.forEach(function(invader){
        stage[invader].classList.remove("invader");
    })
}
function shoot(e) {
    let id;
    let bulletLoc = playerLoc;
    function moveBullet() {
        stage[bulletLoc].classList.remove("bullet");
        if (stage[bulletLoc].classList.contains(invader)){
            stage[bulletLoc].classList.remove("invader");
            stage[bulletLoc].classList.remove("bullet");
            stage[bulletLoc].classList.add("boom");
        }
        bulletLoc -= stageSize;
        if (bulletLoc < 0 ) {
            clearInterval(id);
            return
        }
    }
    stage[bulletLoc].classList.add("bullet");
}

function makePlayer() {
    stage[playerLoc].classList.add("player");
}

function movePlayer(e) {
    stage[playerLoc].classList.remove("player");
    switch (e.key) { 
        case "ArrowLeft":
            if(playerLoc % stageSize !== 0) { playerLoc--; }
            break;
        case "ArrowRight":
            if(playerLoc % stageSize < stageSize - 1) { playerLoc++; }
            break;
    }
    stage[playerLoc].classList.add("player");
}

function makeInvader() {
    invaderLoc.forEach(function(invader) {
        stage[invader].classList.add("invader");
    });
}

function moveInvader() {
    invaderLoc.forEach(function(invader) {
        stage[invader].classList.remove("invader");
    });
    for(let i = 0; i < invaderLoc.length; i++) {
        invaderLoc[i]++;
        stage[invaderLoc[i]].classList.add("invader");
    }
}

function gameStart() {
    makePlayer();
    makeInvader();
    displayStatus();
    gameInterval = setInterval(gameRun, 1000);
    document.addEventListener("keydown", movePlayer); 
    gameRun();
}

function gameRun() {
    moveInvader();
}

function displayStatus() {
    display.innerText = invaderLoc.length + "/" + invaderLoc.length 
}

function gameStop() {
    clearInterval(gameInterval);
    document.removeEventListener("keydown", movePlayer); 
}

startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameStop);

document.addEventListener("keydown" , shoot);