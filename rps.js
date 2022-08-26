function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}



function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) return "It's a Tie!";

    if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    return `You Lose! ${computerSelection} beats ${playerSelection}`;

}

let results = document.querySelector(".results");
let score = document.querySelector('.score');

let you = 0;
let computer = 0;

let done = false;

function startRound(str) {
    if (done) return;

    let outcome = playRound(str, getComputerChoice());
    results.textContent = outcome;
    updateScore(outcome);

}

function updateScore(outcome) {
    if (outcome[4] === "W") {
        you++;
        if (you === 5) {
            score.textContent = "You won";
            done = true;
            return;
        }
    } else if (outcome[4] === "L") {
        computer++;
        if (computer === 5) {
            score.textContent = "You lost"
            done = true;
            return;
        }
    }

    score.textContent = `YOU: ${you} COMPUTER:${computer}`
}





let rockButton = document.querySelector("#rock");
rockButton.addEventListener('click', () => {
    startRound("Rock");
})

let paperButton = document.querySelector("#paper");
paperButton.addEventListener('click', () => {
    startRound("Paper");
});

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener('click', () => {
    startRound("Scissors");
})
