let computerRoll = Math.floor(Math.random() * 3);
console.log(computerRoll);

let computerSelection = undefined;

function computerConvert() {
    if (computerRoll === 0) {
        computerSelection = "rock";
    } else if (computerRoll === 1) {
        computerSelection = "paper"
    } else if (computerRoll === 2) {
        computerSelection = "scissors"
    } return computerSelection;
}

computerConvert()
console.log(computerSelection)

let playerSelection = prompt("Enter rock, paper, or scissors")

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
    } else if (playerSelection === "scissors" && computerSelection === "rock"
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

console.log(playRound())
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
