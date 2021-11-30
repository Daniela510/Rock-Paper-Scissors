console.log('Hi there!');

const outcomes = ['Scissors','Paper','Rock'];
let p = 0;
let c = 0;
let t = 0;


function computerPlay() {
  return outcomes[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
  // your code here!
if (playerSelection == 'Rock') {
  switch (computerSelection) {
    case 'Scissors':
      p++;
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
    case 'Paper':
      c++;
      return `You lose! ${computerSelection} beats ${playerSelection}!` ;
      break;
    case 'Rock':
      t++;
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
  }
} else if (playerSelection == 'Paper') {
  switch (computerSelection) {
    case 'Scissors':
      c++;
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
      break;
    case 'Paper':
      t++;
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
    case 'Rock':
      p++;
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
  }

} else if (playerSelection == 'Scissors'){
  switch (computerSelection) {
    case 'Scissors':
      t++;
      return `You tie! ${computerSelection} is ${playerSelection}`;
      break;
    case 'Paper':
      p++;
      return `You win! ${playerSelection} beats ${computerSelection}!`;
      break;
    case 'Rock':
      c++;
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
      break;
  }

}else {
  return 'Invalid game option!'
}

}


function game() {
  for (var i = 0; i < 5; i++) {
    // get computer choice
    const computerSelection = computerPlay();
    // get pley choice
    const input = prompt("Rock, paper or scissors?");
    // make it case insesnsitive
    for (let i = 0; i < outcomes.length; i++) {
      if(input.toUpperCase() === outcomes[i].toUpperCase()) {
    playerSelection = outcomes[i];}
    }
    playRound(playerSelection, computerSelection);
  }
  console.log(`The human won ${p} rounds!`);
  console.log(`The computer won ${c} rounds!`);
  console.log(`${t} ties.`);
  if (p>c) {
    console.log('HUZZA! YOU WON!');
  } else if (c<p) {
    console.log('Ha, the computer wins this game. You can always try again...');
  } else {
    console.log('No winners or losers this time, refresh?');
  }
}
game();















//move up
