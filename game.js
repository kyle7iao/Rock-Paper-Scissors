// not sure if i should have global variables

let playerWins = 0;
let computerWins = 0;

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
        playerWins++
        return `You win! ${playerSelection} beats ${computerSelection}` 
    } else {
        computerWins++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let userInput;

    for (let i = 1; i <= 5; i++) {
        do {
            userInput = prompt("Choose one of the following options: rock, paper, or scissors");
          } while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors");
          
          console.log("You chose: " + userInput);
        
        console.log(playRound(userInput))
    }
    if (playerWins == computerWins) {
        console.log(`Tie game! Final score: ${playerWins} to ${computerWins}`)
    } else if (playerWins >= computerWins) {
        console.log(`You won! Final score: ${playerWins} to ${computerWins}`)
    } else {
        console.log(`You lost! Final score: ${playerWins} to ${computerWins}`)
    }
}

game();