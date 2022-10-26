console.log("Hello World");

function getComputerChoice()
{
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}


function playRound(playerSelection, computerSelection)
{
    const player = playerSelection.toLowerCase();
    const comp = computerSelection.toLowerCase();
    if (player == "rock" && comp == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (comp == "rock" && player == "paper") {
        return "You Win! Paper beats Rock";
    } else if (comp == "rock" && player == "scissors") {
        return "You Lose! Rock beats Scissors";
    } else if (comp == "scissors" && player == "rock") {
        return "You Win! Rock beats Scissors";
    } else if (comp == "paper" && player == "scissors") {
        return "You Win! Scissors beats Paper";
    } else if (comp == "scissors" && player == "paper") {
        return "You Lose! Scissors beats Paper";
    }

}

function game()
{
    let score = 0;
    for (let i = 0; i < 5; i++) {
        console.log(i);
        let playerSelection = prompt("please enter your choice");
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        while (playerSelection == computerSelection) {
            computerSelection = getComputerChoice();
        }
        console.log(computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result); 
        if (result.includes("Win")) {
            score++;
        }
        console.log(score);
    }
    if (score >= 3) {
        console.log("Congrats! You win!");
    } else {
        console.log("Sorry you lose.");
    }
}

