console.log("Hello World")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    choice = getRandomInt(3)
    if (choice === 0) {
        return "rock"
    }
    else if (choice === 1) {
        return "paper"
    }
    return "scissors"
}

function getHumanChoice() {
    return prompt("Choose by typing rock, paper, or scissors", "rock")
}

let computerScore = 0
let humanScore = 0

function playRound(computerSelection, humanSelection) {
    humanSelection = humanSelection.toLowerCase()
    if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose! Rock beats paper!")
        computerScore++
    } 
    else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    }
    else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose! Scissors beat paper!")
        computerScore++
    }
    else if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win! Paper beats rock!")
        humanScore++
    }
    else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You win! Scissors beat paper!")
        humanScore++
    }
    else if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("You win! Rock beats scissors!")
        humanScore++
    }
    else {
        console.log("It's a draw!")
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);