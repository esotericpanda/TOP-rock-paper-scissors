
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
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === computerSelectionLower) return "It's a Tie!";

    if (playerSelectionLower === "rock" && computerSelectionLower === "scissors" || playerSelectionLower === "scissors" && computerSelectionLower === "paper" || playerSelectionLower === "paper" && computerSelectionLower === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    return `You Lose! ${computerSelection} beats ${playerSelection}`;

}

