const timeLetf = document.querySelector("#time-letf")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")

const mole = document.querySelector(".mole")

for (let i=0; i<9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}

const square = document.querySelectorAll(".square")
square[0].classList.add("mole")

randomeSquare();

function randomeSquare() {
    squares.forEach(function(square) {
        square.classList.remove('mole')
    })
    let randomeSquare = squares[Math.floor(Math.random() * 9)]
    randomeSquare.classList.add('mole')
}

for(let i=0; i<9; i++) {
    squares[i].addEventListenner('mouedown' , function() {
        if (i == targetPosition) {
            result++
            score.textContent = result;
        }
    })
}

function countdown() {
    currentTime--;
    timeLetf.textContent = currentTime;

    if ( currentTime == 0) {
        clearInterval (timer)
        clearInterval(countdownTimer)
        alert("Game Over! Score : " + result)
    }
}

countdownTimer = setInterval(countdown, 1000)