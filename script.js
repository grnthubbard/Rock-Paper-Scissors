function getComputerChoice() {
    let choice = "";
    let decider = Math.random();
    if(decider < 0.33 ) {
        choice = "rock";
    }
    else if(decider > 0.33 & decider <0.66) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("What's the plan? A. Rock B. Paper C. Scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() === "rock" ) {
        if (computerChoice === "rock") {
            console.log("Tie game. Nobody ever truly wins in life.");
        }
        else if (computerChoice === "paper") {
            console.log(computerChoice + "beats" + humanChoice +"You lost. No do overs!");
            computerScore +=1;
        }
        else {
            console.log(humanChoice + "beats" + computerChoice + ". You won, For now.")
            humanScore +=1;
        }
    }
    else if(humanChoice.toLowerCase() === "paper" ) {
        if (computerChoice === "paper") {
            console.log("Tie game. Nobody ever truly wins in life.");
        }
        else if (computerChoice === "scissors") {
            console.log(computerChoice + "beats" + humanChoice +"You lost. No do overs!");
            computerScore +=1;
        }
        else {
            console.log(humanChoice + "beats" + computerChoice + ". You won, For now.")
            humanScore +=1;
        }
    }
    else if (humanChoice.toLowerCase() === "scissors" ) {
        if (computerChoice === "paper") {
            console.log("Tie game. Nobody ever truly wins in life.");
        }
        else if (computerChoice === "scissors") {
            console.log(computerChoice + "beats" + humanChoice +"You lost. No do overs!");
            computerScore +=1;
        }
        else {
            console.log(humanChoice + "beats" + computerChoice + ". You won, For now.")
            humanScore +=1;
        }
    }
    else {
        console.log("Please enter an actual choice.")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
