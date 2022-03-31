function computerPlay() {
    let compResult;
    const randNum = Math.floor(Math.random() * (4 - 1) + 1);
    if (randNum == 3) {
        compResult = "rock";
    } else if (randNum == 2) {
        compResult = "paper";
    } else if (randNum == 1) {
        compResult = "scissors";
    } else {
        compResult = "Error";
    }
    return compResult;
}

function playerPlay() {
    let playerInput = prompt("Rock, paper or scissors?");
    return playerInput.toLowerCase();
}

function gameRound(playerSelection, computerSelection) {
    let gameResult = 0;
    console.log("You chose a " + playerSelection);
    console.log("Computer get a " + computerSelection);
    let resultLoose = `You lose ${computerSelection} beats ${playerSelection}`;
    let resultWin = `You win ${playerSelection} beats ${computerSelection}`;
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Tie!");
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Tie!");
    }
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Tie!");
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        gameResult += -1;
        console.log(resultLoose);
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        gameResult += 1;
        console.log(resultWin);
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        gameResult += 1;
        console.log(resultWin);
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        gameResult += -1;
        console.log(resultLoose);
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        gameResult += -1;
        console.log(resultLoose);
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        gameResult += 1;
        console.log(resultWin);
    }
    return gameResult;
}
// console.log(gameRound(playerPlay(), computerPlay()));

function game() {
    let score = 0;
    for (let i = 0; i < 3; i++) {
        score += gameRound(playerPlay(), computerPlay());
        console.log("-----------------------");
    }
    if (score < 0) {
        console.log("You lost to a computer HA-HA");
    }
    if (score > 0) {
        console.log("Wow! You beat a computer");
    }
    if (score === 0) {
        console.log("Fight was equal");
    }
    return score;
}
console.log(game());