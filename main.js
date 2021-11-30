console.log('Hi there!');

const outcomes = ['Scissors','Paper','Rock'];



function computerPlay() {
  return outcomes[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
  // your code here!
if (playerSelection == 'rock') {
  switch (computerSelection) {
    case 'Scissors':
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
      break;
    case 'Paper':
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
    case 'Rock':
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
  }
} else if (playerSelection == 'paper') {
  switch (computerSelection) {
    case 'Scissors':
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
      break;
    case 'Paper':
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
    case 'Rock':
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
  }

} else if (playerSelection == 'scissors'){
  switch (computerSelection) {
    case 'Scissors':
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
      break;
    case 'Paper':
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
    case 'Rock':
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
  }

}else {
  return 'Invalid game option!'
}

}


const computerSelection = computerPlay();
const input = prompt("Rock, paper or scissors?");

for (let i = 0; i < outcomes.length; i++) {
  if(input.toUpperCase() === outcomes[i].toUpperCase()) {
playerSelection = outcomes[i];}
}


console.log(playRound(playerSelection, computerSelection));















//move up