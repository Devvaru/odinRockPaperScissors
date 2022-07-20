let playerCount = 0;
let computerCount = 0;

const btns = document.querySelectorAll('button');
const div = document.querySelector('div');
const container = document.querySelector('#text-container')

const p = document.createElement('p');
p.classList.add('p');

const playerScore = document.createElement('playerScore');
playerScore.classList.add('playerScore')
playerScore.textContent = 'Player Score: 0'
container.appendChild(playerScore);

const computerScore = document.createElement('computerScore');
computerScore.classList.add('computerScore')
computerScore.textContent = 'Computer Score: 0'
container.appendChild(computerScore);

p.textContent = 'Choose an item to start!';
container.appendChild(p);


btns.forEach((btn) => {
    btn.addEventListener('click', () => {

        playerSelection = btn.classList.value;
        console.log(btn.classList.value)
        playRound(playerSelection, computerTurn());

        if (playerCount === 5 && computerCount < 5) {
            p.textContent = "You win the match!";

            const replay = document.createElement('button');
            replay.textContent = 'Play again?';
            container.appendChild(replay);

            replay.addEventListener ('click', () => {
                p.textContent = 'Choose an item to start!';
                playerCount = 0;
                computerCount = 0;
                playerScore.textContent = 'Player Score: ' + 0;
                computerScore.textContent = 'Computer Score: ' + 0;
                container.removeChild(replay);
            });
            
        } else if (computerCount === 5 && playerCount < 5) {
            p.textContent = "Computer wins the match!";

            const replay = document.createElement('button');
            replay.textContent = 'Play again?';
            container.appendChild(replay);

            replay.addEventListener ('click', () => {
                p.textContent = 'Choose an item to start!';
                playerCount = 0;
                computerCount = 0;
                playerScore.textContent = 'Player Score: ' + 0;
                computerScore.textContent = 'Computer Score: ' + 0;
                container.removeChild(replay);
            });
            
        }

    })
})

function computerTurn() {
    let computerSelection = undefined;

    let computerRoll = Math.floor(Math.random() * 3);

    computerConvert();

    function computerConvert() {
        if (computerRoll === 0) {
            computerSelection = "rock";
        } else if (computerRoll === 1) {
            computerSelection = "paper"
        } else if (computerRoll === 2) {
            computerSelection = "scissors"
        }
    }
        console.log(computerSelection);
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerCount += 1;
        console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");

        playerScore.textContent = 'Player Score: ' + playerCount;
        computerScore.textContent = 'Computer Score: ' + computerCount;
        p.textContent = "You win! Rock beats scissors";
        
    } else if (
        playerSelection === "paper" && computerSelection === "rock"
    ) {
        playerCount += 1;
        console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");

        playerScore.textContent = 'Player Score: ' + playerCount;
        computerScore.textContent = 'Computer Score: ' + computerCount;
        p.textContent = "You win! Paper beats rock.";
    } else if (
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        playerCount += 1;
        console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");

        playerScore.textContent = 'Player Score: ' + playerCount;
        computerScore.textContent = 'Computer Score: ' + computerCount;
        p.textContent = "You win! Scissors beats paper.";
    } else if (
        playerSelection === "scissors" && computerSelection === "rock"
    ) {
        computerCount += 1;
        console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");

        playerScore.textContent = 'Player Score: ' + playerCount;
        computerScore.textContent = 'Computer Score: ' + computerCount;
        p.textContent = "You lose! Rock beats scissors.";
    } else if (
        playerSelection === "rock" && computerSelection === "paper"
    ) {
        computerCount += 1;
        console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");

        playerScore.textContent = 'Player Score: ' + playerCount;
        computerScore.textContent = 'Computer Score: ' + computerCount;
        p.textContent = "You lose! Paper beats rock.";
    } else if (
        playerSelection === "paper" && computerSelection === 'scissors'
    ) {
        computerCount += 1;
        console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");

        playerScore.textContent = 'Player Score: ' + playerCount;
        computerScore.textContent = 'Computer Score: ' + computerCount;
        p.textContent = "You lose! Scissors beats paper.";
    } else {
        console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");

        playerScore.textContent = 'Player Score: ' + playerCount;
        computerScore.textContent = 'Computer Score: ' + computerCount;
        p.textContent = "It's a tie!";
    }

};

    // for (let i = 0; i < 5; i++) {
        
    //     // console.log(playRound(playerSelection, computerTurn()));
    // }

    // if (playerCount > computerCount) {
    //     console.log("You win the match!");
    // } else if (playerCount < computerCount) {
    //     console.log("Computer wins the match!");
    // } else {
    //     console.log("No winners, it's a tie!");
    // }

//Prompt for playerSelection - outdated

// function playerTurn() {
// let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
// console.log(playerSelection);
// return playerSelection;
// }




/////////////////////////////////////////
//>>>>Simplified Version for playRound()
// 
// switch(playerSelection, computerSelection) {
//     case playerSelection === "rock" && computerSelection === "scissors":
//     case playerSelection === "paper" && computerSelection === "rock":
//     case playerSelection === "scissors" && computerSelection === "paper":
//         return "Player is the winner!";
//         break;
//     case playerSelection === computerSelection:
//         return "It's a tie!";
//         break;
//     default:
//         return "Computer is the winner!";
// }
