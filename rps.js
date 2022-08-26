
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


let rockButton = document.querySelector("#rock");
rockButton.addEventListener('click',()=>{
    console.log(playRound("Rock", getComputerChoice()));
})

let paperButton= document.querySelector("#paper");
paperButton.addEventListener('click',()=>{
    console.log(playRound("Paper", getComputerChoice()));
});

let scissorsButton=document.querySelector("#scissors");
scissorsButton.addEventListener('click', ()=>{
    console.log(playRound("Scissors", getComputerChoice()));
})
