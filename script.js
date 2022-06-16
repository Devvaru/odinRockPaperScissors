function playerTurn() {
    let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

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
    return computerSelection;

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (
        playerSelection === "paper" && computerSelection === "rock"
    ) {
        return "You win! Paper beats rock.";
    } else if (
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        return "You win! Scissors beats paper.";
    } else if (
        playerSelection === "scissors" && computerSelection === "rock"
    ) {
        return "You lose! Rock beats scissors.";
    } else if (
        playerSelection === "rock" && computerSelection === "paper"
    ) {
        return "You lose! Paper beats rock.";
    } else if (
        playerSelection === "paper" && computerSelection === 'scissors'
    ) {
        return "You lose! Scissors beats paper.";
    } else {
        return "It's a tie!";
    }

}

console.log(playRound(playerTurn(), computerTurn()));


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerTurn(), computerTurn()));
    }
    
}

console.log(game())
// computerTurn();
// console.log(computerSelection);
// playerTurn();
// console.log(playerSelection);
// playRound(computerSelection, playerSelection);


//>>>>Simplifed Version
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
