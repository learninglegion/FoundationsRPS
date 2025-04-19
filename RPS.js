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
    let hChoice = prompt("Type 1 for ROCK, 2 for PAPER"+
        " or 3 for SCISSORS.", 1);

// Assignment calls for typing the choice and making the input case-
// insensitive. So here is the code if I wanted that:
// let hChoice = prompt("Type 'rock', 'paper', or 'scissors' to choose.").toLowerCase();

if (hChoice == 1) {
        console.log("You've chosen ROCK!");
    } else if (hChoice == 2) {
        console.log("You've chosen PAPER!");
    } else {
        console.log("You've chosen SCISSORS!");
    }
    return hChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    hChoice = getHumanChoice();
    choice = getComputerChoice();
    console.log(`I choose ${choice}!`);
    if (hChoice == 1) {
        switch (hChoice == 1) {
            case choice == "ROCK":
                console.log("We both chose ROCK. No points.");
                break;
            case choice == "PAPER":
                console.log("PAPER beats ROCK! Point for me!");
                break;
            case choice == "SCISSORS":
                console.log("ROCK beats SCISSORS. Point for you.");
                break;          
        }
    } else if (hChoice == 2) {
        switch (hChoice == 2) {
            case choice == "ROCK":
                console.log("PAPER beats ROCK. Point for you.");
                break;
            case choice == "PAPER":
                console.log("We both chose PAPER. No points.");
                break;
            case choice == "SCISSORS":
                console.log("SCISSORS beat PAPER! Point for me!");
                break;          
        }
    } else {
        switch (hChoice == 3) {
            case choice == "ROCK":
                console.log("ROCK beats SCISSORS. Point for me!");
                break;
            case choice == "PAPER":
                console.log("SCISSORS beat PAPER. Point for you.");
                break;
            case choice == "SCISSORS":
                console.log("We both chose SCISSORS. No points.");
                break;          
        }
    }



}

playRound();




