console.log('Hi there!');

const outcomes = ['Scissors','Paper','Rock'];



function computerPlay() {
  return outcomes[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
  // your code here!
if (playerSelection == 'Rock') {
  switch (computerSelection) {
    case 'Scissors':
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
    case 'Paper':
      return `You lose! ${computerSelection} beats ${playerSelection}!` ;
      break;
    case 'Rock':
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
  }
} else if (playerSelection == 'Paper') {
  switch (computerSelection) {
    case 'Scissors':
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
      break;
    case 'Paper':
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
    case 'Rock':
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
  }

} else if (playerSelection == 'Scissors'){
  switch (computerSelection) {
    case 'Scissors':
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
    case 'Paper':
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
    case 'Rock':
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
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
