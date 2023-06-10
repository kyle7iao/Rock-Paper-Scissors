// not sure if i should have global variables

function getComputerChoice() {
    let option;

    // generate random choice
    let randNum = Math.floor(Math.random() * 3)

    switch (randNum) {
        case 0:
            option = 'rock';
            break;
        case 1:
            option = 'paper';
            break;
        case 2:
            option = 'scissors';
            break;
    }

    return option
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 
    ) {
            return `You win! ${playerSelection} beats ${computerSelection}` 
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

console.log(playRound('ROCK'))