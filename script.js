function getComputerChoice() {
    let choice = "";
    let decider = Math.random();
    if(decider <= 0.33 ) {
        choice = "rock";
    }
    else if(decider <= 0.66) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}


let humanScore = 0;
let computerScore = 0;


const result = document.querySelector("#result");
const container  = document.querySelector("#container");
const scores = document.querySelector("#scores");
const humanTotal = document.querySelector("#human-score");
const computerTotal = document.querySelector("#computer-score");
scores.appendChild(humanTotal);
scores.appendChild(computerTotal); 



function playRound(humanChoice, computerChoice) {
    

    if(humanChoice.toLowerCase() === "rock" ) {
        if (computerChoice === "rock") {
            result.textContent = "Tie game. Nobody wins."
        }
        else if (computerChoice === "paper") {
            result.textContent = computerChoice + " beats " + humanChoice +". You lost. No do overs!";
            computerScore +=1;
            
        }
        else {
            result.textContent = humanChoice + " beats " + computerChoice + ". You won, For now.";
            humanScore +=1;
        }
    }
    else if(humanChoice.toLowerCase() === "paper" ) {
        if (computerChoice === "paper") {
           result.textContent = "Tie game. Nobody wins."
        }
        else if (computerChoice === "scissors") {
            result.textContent = computerChoice + " beats " + humanChoice +". You lost. No do overs!";
            computerScore +=1;
        }
        else {
            result.textContent = humanChoice + " beats " + computerChoice + ". You won, For now.";
            humanScore +=1;
        }
    }
    else if (humanChoice.toLowerCase() === "scissors" ) {
        if (computerChoice === "scissors") {
            result.textContent = "Tie game. Nobody wins."
        }
        else if (computerChoice === "rock") {
            result.textContent = computerChoice + " beats " + humanChoice +". You lost. No do overs!";
            computerScore +=1;
        }
        else {
            result.textContent = humanChoice + " beats " + computerChoice + ". You won, For now.";
            humanScore +=1;
        }
    }
    else {
        console.log("Please enter an actual choice.");
    }
    
        humanTotal.textContent = "Human Score: " + humanScore;
        computerTotal.textContent = "Computer Score: " + computerScore;
        
    if(humanScore == 5) {
        result.textContent = "Game is over. Humans win!";
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
        btn3.style.visibility = "hidden";
        humanTotal.style.color = "green";
    }
    else if (computerScore == 5) {
        result.textContent ="Game is over. Computers win...";
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "hidden";
        btn3.style.visibility = "hidden";
        computerTotal.style.color = "green";
    }
    
}



///Code below would be for group of nodes, not sure how to implement this yet
/*
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
*/

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const resetBtn = document.querySelector("#resetBtn")
resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    document.querySelector("#human-score").textContent = "Human: 0"; // Reset human score display
    document.querySelector("#computer-score").textContent = "Computer: 0"; 
    btn1.style.visibility = "visible";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    humanTotal.style.color = "black";
    computerTotal.style.color = "black";
});
btn1.addEventListener("click", () => playRound("rock", getComputerChoice()));
btn2.addEventListener("click", () => playRound("paper", getComputerChoice()));
btn3.addEventListener("click", () => playRound("scissors", getComputerChoice()));

