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

const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockbtn = document.getElementById('rockbtn')
const paperbtn = document.getElementById('paperbtn')
const scissorsbtn = document.getElementById('scissorsbtn')
const p1Score = document.querySelector('#p1score');
const p2Score = document.querySelector('#p2score');
const gameStatus = document.querySelector('#status')

rockbtn.addEventListener('click', () => handleClick('rock'))
paperbtn.addEventListener('click', () => handleClick('paper'))
scissorsbtn.addEventListener('click', () => handleClick('scissors'))

function updateChoices(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'rock':
            playerSign.textContent = '✊'
            break
          case 'paper':
            playerSign.textContent = '✋'
            break
          case 'scissors':
            playerSign.textContent = '✌'
            break
    }

    switch (computerSelection) {
        case 'rock':
          computerSign.textContent = '✊'
          break
        case 'paper':
          computerSign.textContent = '✋'
          break
        case 'scissors':
          computerSign.textContent = '✌'
          break
      }
}

function updateScore() {
  p1Score.textContent = `Player Score: ${playerWins}`
  p2Score.textContent = `Opponent Score: ${computerWins}`
}


function handleClick(playerSelection) {  
  const computerSelection = getComputerChoice();
  gameStatus.textContent = `${playRound(playerSelection, computerSelection)}`;
  updateChoices(playerSelection, computerSelection);
  updateScore();
  checkGameOver(); 
}

function checkGameOver() {
  if (playerWins === 5 || computerWins === 5) {
    let winner;
    (playerWins === 5) ? winner = 'You' : winner = 'The computer'
    setTimeout(() => { //set timeout to let UI update before prompt
      const restart = confirm(`Game over! ${winner} won. Do you want to play again?`);
      if (restart) {
        playerWins = 0;
        computerWins = 0;
        updateScore();
        gameStatus.textContent = 'Pick a move to begin the game';
      }
    }, 1);
  }
}