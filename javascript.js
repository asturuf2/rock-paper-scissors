function getComputerChoice(){
    let rps = Math.floor(Math.random() * 3)
        if (rps==0){
            return "ROCK";
        }
        else if (rps==1){
            return "PAPER";
        }
        else {
            return "SCISSORS";
        }
}

let computerScore = 0;
let playerScore = 0;
const one = document.querySelector("#ROCK");
const two = document.querySelector("#PAPER");
const three = document.querySelector("#SCISSORS");
const display = document.querySelector("#display");
const score = document.querySelector(".score")

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player == computer){
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        display.appendChild(p)
    } else if (player == "ROCK" && computer == "SCISSORS"){
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win! Rock beats scissors!";
        display.appendChild(p)
    } else if (player == "ROCK" && computer == "PAPER"){
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lose! Paper beats rock!";
        display.appendChild(p)
    } else if (player == "PAPER" && computer == "ROCK"){
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win! Paper beats rock!"; 
        display.appendChild(p)   
    } else if (player == "PAPER" && computer == "SCISSORS"){
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lose! Scissors beat paper!"; 
        display.appendChild(p)
    } else if (player == "SCISSORS" && computer == "ROCK"){
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lose! Rock beats scissors!"; 
        display.appendChild(p)
    } else if (player == "SCISSORS" && computer == "PAPER"){
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win! Scissors beat paper!"; 
        display.appendChild(p)
    }
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore == 5){
        const h2 = document.createElement('h2')
        h2.innerText = `You won ${playerScore} to ${computerScore}`
        display.append(h2)
    } else if (computerScore == 5){
        const h2 = document.createElement('h2')
        h2.innerText = `You lost ${playerScore} to ${computerScore}`
        display.append(h2)
    }
}

const runningScore = () => {
    score.innerText = `${playerScore} ${computerScore}`
}

one.addEventListener('click', () => {
    let result = playRound('rock', getComputerChoice());
    checkForWinner(playerScore, computerScore);
    runningScore()
    // document.getElementById("display").innerText = result;
});

two.addEventListener('click', () => {
    let result = playRound('paper', getComputerChoice());
    checkForWinner(playerScore, computerScore);
    runningScore()
    // document.getElementById("display").innerText = result;
})
three.addEventListener('click', () => {
    let result = playRound('scissors', getComputerChoice());
    checkForWinner(playerScore, computerScore);
    runningScore()
    // document.getElementById("display").innerText = result;

})

// function game(){ 
//     let playerScore = 0;
//     let computerScore = 0;
//     //for(let i = 0; i < 5; i++){
//         let result = playRound(prompt("input"), getComputerChoice());
//         if (result.includes("You win!")){
//             playerScore += 1;
//             console.log("You won that round");
//         } else if (result.includes("You lose!")){
//             computerScore += 1;
//             console.log("You lost that round");
//         } else if (result.includes("It's a tie!")){
//             playerScore +=0;
//             computerScore +=0;
//             console.log("You tied that round");
//         }
//     //}
//     if (playerScore > computerScore){
//         console.log("You win the game!");
//     } else if (playerScore < computerScore){
//         console.log("You lose the game!");
//     } else {
//         console.log("You tied the game!");
//     }
//     // return playRound(prompt("input"), getComputerChoice());
// }







