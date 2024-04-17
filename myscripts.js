
const choices = ["ROCK", "PAPER", "SCISSORS"];

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".button-container button");
const result = document.querySelector(".result");
const score = document.querySelector(".score-container");
const reset = document.querySelector("#reset");

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)].toUpperCase();
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "ROCK":
            switch (computerChoice) {
                case "ROCK":
                    result.textContent = "Rock and Rock! You tie!";
                    return;
                case "SCISSORS":
                    result.textContent = "Rock beats Scissors! You win!";
                    playerScore += 1;
                    return;
                case "PAPER":
                    result.textContent = "Paper beats Rock! You lose!";
                    computerScore += 1;
                    return;
            }
        case "PAPER":
            switch (computerChoice) {
                case "ROCK":
                    result.textContent = "Paper beats Rock! You win!";
                    playerScore += 1;
                    return;
                case "SCISSORS":
                    result.textContent = "Scissors beats Paper! You lose!";
                    computerScore += 1;
                    return;
                case "PAPER":
                    result.textContent = "Paper and Paper! You tie!";
                    return;
            }
        case "SCISSORS":
            switch (computerChoice) {
                case "ROCK":
                    result.textContent = "Rock beats Scissors! You lose!";
                    computerScore += 1;
                    return;
                case "SCISSORS":
                    result.textContent = "Scissors and Scissors! You Tie!";
                    return;
                case "PAPER":
                    result.textContent = "Scissors beats Paper! You win!";
                    playerScore += 1;
                    return;
            }
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(`Score:\n Player - ${playerScore}\n Computer - ${computerScore}`)
    }
}




buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
        if (playerScore <= 4 && computerScore <=4) {
            score.textContent = `Score:\n Player - ${playerScore}\n Computer - ${computerScore}`;
        } else {
            if (playerScore > computerScore) {
                score.textContent = "YOU WIN!";
            } else {
                score.textContent = "COMPUTER WINS!";
            }
        }
    });
});

reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    score.textContent = `Score:\n Player - ${playerScore}\n Computer - ${computerScore}`;
});








