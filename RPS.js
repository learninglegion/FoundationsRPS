console.log("Welcome to the Rock, Paper, Scissors ARENA!\n" +
    "Here you will test your wits against the greatest " +
    "lighning-infused rocks of our generation.\n" +
    "DO YOU HAVE WHAT IT TAKES TO BEST *ME* - THE LIBRARIAN?!");

function getComputerChoice() {
    const randNum = String(Math.random());
    let choice = 0;
    let i = 2;
    while (choice == 0 ?? i < randNum.length) {
        choice = +randNum.charAt(i);
        i++;
    }
    if (choice >=1 && choice <=3) {
        choice = "ROCK";
    } else if (choice >=4 && choice <=6) {
        choice = "PAPER";
    } else {
        choice = "SCISSORS";
    }
    return choice;
}

function getHumanChoice() {
// Assignment calls for typing the choice and making the input case-
// insensitive. So here is the code if I wanted that:
// let humanChoice = prompt("Type 'rock', 'paper', or 'scissors' to choose.").toLowerCase();

    let humanChoice = prompt("Type 1 for ROCK, 2 for PAPER"+
        " or 3 for SCISSORS.", 1);
    if (humanChoice == 1) {
            // console.log("You've chosen ROCK!");
        } else if (humanChoice == 2) {
            // console.log("You've chosen PAPER!");
        } else {
            // console.log("You've chosen SCISSORS!");
        }
        return humanChoice;
    }

function playRound(humanChoice, computerChoice) {
    // console.log(`I choose ${computerChoice}!`);
    console.log(`One, two, three... ${computerChoice} `);
    if (humanChoice == 1) {
        switch (humanChoice == 1) {
            case computerChoice == "ROCK":
                console.log("We both chose ROCK. No points.");
                break;
            case computerChoice == "PAPER":
                console.log("PAPER beats ROCK! Point for me!");
                computerScore++;
                break;
            case computerChoice == "SCISSORS":
                console.log("ROCK beats SCISSORS. Point for you.");
                humanScore++;
                break;          
        }
    } else if (humanChoice == 2) {
        switch (humanChoice == 2) {
            case computerChoice == "ROCK":
                console.log("PAPER beats ROCK. Point for you.");
                humanScore++;
                break;
            case computerChoice == "PAPER":
                console.log("We both chose PAPER. No points.");
                break;
            case computerChoice == "SCISSORS":
                console.log("SCISSORS beat PAPER! Point for me!");
                computerScore++;
                break;          
        }
    } else {
        switch (humanChoice == 3) {
            case computerChoice == "ROCK":
                console.log("ROCK beats SCISSORS. Point for me!");
                computerScore++;
                break;
            case computerChoice == "PAPER":
                console.log("SCISSORS beat PAPER. Point for you.");
                humanScore++;
                break;
            case computerChoice == "SCISSORS":
                console.log("We both chose SCISSORS. No points.");
                break;          
        }
    }
    console.log(`Human:${humanScore} Me:${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    // let humanScore = 0;
    // let computerScore = 0;
    let i = 0
    console.log("Let's play. How about best of five?")
    while (i < 5) {
        console.log(`--= ROUND ${i + 1} =--`)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        i++;
    }
    if (humanScore > computerScore) {
        console.log("Humans are so lucky. You win.");
    } else if (humanScore < computerScore) {
        console.log("A loss to the superior entity is still humiliating. I win!");        
    } else {
        console.log("We are equally matched. Perhaps you are worthy.")
    }
    console.log("--= GAME OVER =--")
}

playGame();
