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


function playRound(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player == computer){
        return "It's a tie!";
    } else if (player == "ROCK" && computer == "SCISSORS"){
        return "You win! Rock beats scissors!";
    } else if (player == "ROCK" && computer == "PAPER"){
        return "You lose! Paper beats rock!";
    } else if (player == "PAPER" && computer == "ROCK"){
        return "You win! Paper beats rock!";    
    } else if (player == "PAPER" && computer == "SCISSORS"){
        return "You lose! Scissors beat paper!"; 
    } else if (player == "SCISSORS" && computer == "ROCK"){
        return "You lose! Rock beats scissors!"; 
    } else if (player == "SCISSORS" && computer == "PAPER"){
        return "You win! Scissors beat paper!"; 
    }
}

function game(){ 
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound(prompt("input"), getComputerChoice());
        if (result.includes("You win!")){
            playerScore += 1;
            console.log("You won that round");
        } else if (result.includes("You lose!")){
            computerScore += 1;
            console.log("You lost that round");
        } else if (result.includes("It's a tie!")){
            // playerScore +=0;
            // computerScore +=0;
            console.log("You tied that round");
        }
    }
    if (playerScore > computerScore){
        console.log("You win the game!");
    } else if (playerScore < computerScore){
        console.log("You lose the game!");
    } else {
        console.log("You tied the game!");
    }
    // return playRound(prompt("input"), getComputerChoice());
}