let computerRoll = Math.floor(Math.random() * 3);
console.log(computerRoll);

let computerSelection = undefined;

function computerConvert () {
    if (computerRoll === 0) {
        let computerSelection = "rock";
    } else if (computerRoll === 1) {
        let computerSelection = "paper"
    } else if (computerRoll === 2) {
        let computerSelection = "scissors"
    };
}

// function playRound(playerSelection, computerSelection) {



//   }
  
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));