console.log("Hello World");


function getComputerChoice()
{
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

const results = document.querySelector("div.results"); 
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const winner = document.querySelector(".winner");
// score1.textContent = "Computer Score";
// score2.textContent = "Human Score";

let score_player = 0; 
let score_comp = 0;


function playRound(playerSelection) {
    // let playerSelection = prompt("please enter your choice");
    // console.log(playerSelection);
    winner.textContent = "";

    let computerSelection = getComputerChoice();
    while (playerSelection == computerSelection) {
        computerSelection = getComputerChoice();
    }
    const player = playerSelection;
    const comp = computerSelection;
    
    if (player == "rock" && comp == "paper") {
        results.textContent = "You Lose! Paper beats Rock";
    } else if (comp == "rock" && player == "paper") {
        results.textContent = "You Win! Paper beats Rock";
    } else if (comp == "rock" && player == "scissors") {
        results.textContent = "You Lose! Rock beats Scissors";
    } else if (comp == "scissors" && player == "rock") {
        results.textContent = "You Win! Rock beats Scissors";
    } else if (comp == "paper" && player == "scissors") {
        results.textContent = "You Win! Scissors beats Paper";
    } else if (comp == "scissors" && player == "paper") {
        results.textContent = "You Lose! Scissors beats Paper";
    }
    if (results.textContent.includes("Win")) {
        score_player++;
        console.log(score_player);
    } else {
        score_comp++;
        console.log(score_comp);
    }
    score1.textContent = score_player;
    score2.textContent = score_comp;

    if (score_player >= '5') {
        winner.textContent = "you win!";
        score_player = 0;
        score_comp = 0;
    } else if (score_comp >= '5') {
        winner.textContent = "you lose";
        score_player = 0;
        score_comp = 0;
    } 
    
}

const buttonRock = document.getElementById("btn-rock");
buttonRock.addEventListener("click", () => playRound("rock"));

const buttonPaper = document.getElementById("btn-paper");
buttonPaper.addEventListener("click", () => playRound("paper"));

const buttonScissors = document.getElementById("btn-scissors");
buttonScissors.addEventListener("click", () => playRound("scissors"));


// function game()
// {
//     let score = 0;
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result); 

//         console.log(score);
//     }
//     if (score >= 3) {
//         console.log("Congrats! You win!");
//     } else {
//         console.log("Sorry you lose.");
//     }
// }

