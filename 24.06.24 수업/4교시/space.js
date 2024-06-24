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

