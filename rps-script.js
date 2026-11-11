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

console.log(getComputerChoice())
console.log(getHumanChoice())