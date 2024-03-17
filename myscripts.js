
const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)].toUpperCase();
    return computerChoice;
}



function getPlayerChoice() {
    let playerChoice = prompt("What would you like to choose?").trim().toUpperCase(); 
    if (choices.includes(playerChoice)) {
        return playerChoice;
    } else {
        console.log("Selection must be Rock, Paper, or Scissors");
    }
}


function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "ROCK":
            switch (computerChoice) {
                case "ROCK":
                    console.log("Rock and Rock! You tie!");
                case "SCISSORS":
                    console. log("Rock beats Scissors! You win!");
                case "PAPER":
                    console.log("Paper beats Rock! You lose!");
            }
        case "PAPER":
            switch (computerChoice) {
                case "ROCK":
                    console.log("Paper beats Rock! You win!");
                case "SCISSORS":
                    console. log("Scissors beats Paper! You lose!");
                case "PAPER":
                    console.log("Paper and Paper! You tie!");
            }

        case "SCISSORS":
            switch (computerChoice) {
                case "ROCK":
                    console.log("Rock beats Scissors! You lose!");
                case "SCISSORS":
                    console. log("Scissors and Scissors! You lose!");
                case "PAPER":
                    console.log("Scissors beats Paper! You win!");
    }
}
}


let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
console.log(getPlayerChoice(), getComputerChoice());



