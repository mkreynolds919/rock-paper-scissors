
const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)].toUpperCase();
    return computerChoice;
}

function choiceValid(choice) {
    if (choice in choices) {
        return true;
    } else {
        console.log("Selection must be Rock, Paper, or Scissors");
    }
}


function getPlayerChoice() {
    let playerChoice = prompt("What would you like to choose?").trim().toUpperCase(); 
    if (choices.includes(playerChoice)) {
        return playerChoice;
    } else {
        console.log("Selection must be Rock, Paper, or Scissors");
    }
}

console.log(getPlayerChoice(), getComputerChoice());



