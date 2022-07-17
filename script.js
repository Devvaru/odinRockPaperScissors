const btns = document.querySelectorAll('button');

let playerCount = 0;
let computerCount = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
       
        playerSelection = btn.classList.value;
        console.log(btn.classList.value)

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
                return "You win! Rock beats scissors.";
        
            } else if (
                playerSelection === "paper" && computerSelection === "rock"
            ) {
                playerCount += 1;
                console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");
                return "You win! Paper beats rock.";
            } else if (
                playerSelection === "scissors" && computerSelection === "paper"
            ) {
                playerCount += 1;
                console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");
                return "You win! Scissors beats paper.";
            } else if (
                playerSelection === "scissors" && computerSelection === "rock"
            ) {
                computerCount += 1;
                console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");
                return "You lose! Rock beats scissors.";
            } else if (
                playerSelection === "rock" && computerSelection === "paper"
            ) {
                computerCount += 1;
                console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");
                return "You lose! Paper beats rock.";
            } else if (
                playerSelection === "paper" && computerSelection === 'scissors'
            ) {
                computerCount += 1;
                console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");
                return "You lose! Scissors beats paper.";
            } else {
                console.log("Your score is " + playerCount + ". Computer's score is " + computerCount + ".");
                return "It's a tie!";
            }
        
        }; playRound(playerSelection, computerTurn());
        

    })
})

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(playerTurn(), computerTurn()));
//     }

//     if (playerCount > computerCount) {
//         console.log("You win the match!");
//     } else if (playerCount < computerCount) {
//         console.log("Computer wins the match!");
//     } else {
//         console.log("It's a tie!");
//     }
// }

// game();

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
