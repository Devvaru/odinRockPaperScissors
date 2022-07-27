let playerCount = 0;
let computerCount = 0;


const body = document.querySelectorAll('body');
//Links html elements to js
const btns = document.querySelectorAll('button');
const div = document.querySelector('div');
const container = document.querySelector('#text-container')
const score_container = document.querySelector('#score-container')
container.appendChild(score_container);

const p = document.createElement('p');
p.classList.add('p');

//Adds playerScore and computerScore to DOM
const playerScore = document.createElement('playerScore');
playerScore.classList.add('playerScore')
playerScore.textContent = 'Player Score: 0'
score_container.appendChild(playerScore);

const computerScore = document.createElement('computerScore');
computerScore.classList.add('computerScore')
computerScore.textContent = 'Computer Score: 0'
score_container.appendChild(computerScore);

p.textContent = 'Choose an item to start!';
container.appendChild(p);

//Adds replay button, hidden by default in css
const replay = document.createElement('button');
replay.textContent = 'Play again?';
container.appendChild(replay);

//Event listener for replay button
replay.addEventListener ('click', () => {
    p.textContent = 'Choose an item to start!';
    playerCount = 0;
    computerCount = 0;
    playerScore.textContent = 'Player Score: ' + 0;
    computerScore.textContent = 'Computer Score: ' + 0;
    playing = true;
    hide();
});

//Shows replay button when conditions met
function show() {
    document.getElementsByTagName('button')[3].style.display = 'flex';
    btns.forEach((btn) => {
        btn.setAttribute('disabled', true);
    })
}

//Hides replay button when conditions met
function hide() {
    document.getElementsByTagName('button')[3].style.display = 'none';
    btns.forEach((btn) => {
        btn.removeAttribute('disabled', true);
    })
}

let playing = true;
console.log(playing);

//Assigns layerSelection from button and plays round on button click
btns.forEach((btn) => {
    btn.addEventListener('click', function game() {

        playerSelection = btn.classList.value;
        console.log(btn.classList.value)
        playRound(playerSelection, computerTurn());

    
         if (playerCount === 5 && computerCount < 5) {
            p.textContent = "You win the match!";
        
            show();
            playing = false;
            console.log(playing);
            
        } else if (computerCount === 5 && playerCount < 5) {
            p.textContent = "Computer wins the match!";
            
            show();
            playing = false;
            console.log(playing);
        }console.log(playing);

        
    })
})

// document.body.addEventListener('click', () => {
//     if (playing == false) {
//         stopListening();
//     }

// })

// function stopListening() {
//     btns.forEach((btn) => {
//         btn.removeEventListener('click', game);
//         playing = true;
//     });
// }


//Randomly chooses an item for computer's turn
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
        // console.log(computerSelection);
    return computerSelection;
}

//Adds to playerScore and computerScore and displays message
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
