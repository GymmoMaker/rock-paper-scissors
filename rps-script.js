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

function playRound() {
    const computerSelection = getComputerChoice()
    const humanSelection = getHumanChoice().toLowerCase()
    if (computerSelection === "rock" && humanSelection === "scissors") {
        console.log("You lose! Rock beats paper!")
        return 0
    } 
    else if (computerSelection === "paper" && humanSelection === "rock") {
        console.log("You lose! Paper beats rock!")
        return 0
    }
    else if (computerSelection === "scissors" && humanSelection === "paper") {
        console.log("You lose! Scissors beat paper!")
        return 0
    }
    else if (computerSelection === "rock" && humanSelection === "paper") {
        console.log("You win! Paper beats rock!")
        return 1
    }
    else if (computerSelection === "paper" && humanSelection === "scissors") {
        console.log("You win! Scissors beat paper!")
        return 1
    }
    else if (computerSelection === "scissors" && humanSelection === "rock") {
        console.log("You win! Rock beats scissors!")
        return 1
    }
    else {
        console.log("It's a draw!")
    }
}

function playGame() {
    let computerScore = 0
    let humanScore = 0
    for (let i = 0; i < 5; i++) {
        let result = playRound()
        if (result === 0) {
            computerScore++
        }
        else if (result === 1) {
            humanScore++
        }
    }
    if (computerScore > humanScore) {
        console.log("You lost " + humanScore + " - " + computerScore + "!")
    }
    else if (computerScore < humanScore) {
        console.log("You won " + humanScore + " - " + computerScore + "!")
    }
    else {
        console.log("You drew!")
    }
}

playGame()