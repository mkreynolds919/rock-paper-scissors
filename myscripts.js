
const choices = ["ROCK", "PAPER", "SCISSORS"];

let computerScore = 0;
let playerScore = 0;

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
                    return;
                case "SCISSORS":
                    console. log("Rock beats Scissors! You win!");
                    playerScore += 1;
                    return;
                case "PAPER":
                    console.log("Paper beats Rock! You lose!");
                    computerScore += 1;
                    return;
            }
        case "PAPER":
            switch (computerChoice) {
                case "ROCK":
                    console.log("Paper beats Rock! You win!");
                    playerScore += 1;
                    return;
                case "SCISSORS":
                    console. log("Scissors beats Paper! You lose!");
                    computerScore += 1;
                    return;
                case "PAPER":
                    console.log("Paper and Paper! You tie!");
                    return;
            }
        case "SCISSORS":
            switch (computerChoice) {
                case "ROCK":
                    console.log("Rock beats Scissors! You lose!");
                    computerScore += 1;
                    return;
                case "SCISSORS":
                    console. log("Scissors and Scissors! You Tie!");
                    return;
                case "PAPER":
                    console.log("Scissors beats Paper! You win!");
                    playerScore += 1;
                    return;
            }
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(playerChoice, computerChoice);
        console.log(`Score:\n Player - ${playerScore}\n Computer - ${computerScore}`)
    }
}



let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
playGame();



