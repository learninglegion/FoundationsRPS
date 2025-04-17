console.log("Hello, World!");

// Generate random number to simulate cpu choice
// Maybe take the first number in stroing that is not
// a 0 instead of rerolling until * 10 is not 0?
function getComputerChoice() {
    let choice = Math.random() * 10
    console.log(choice);
}

getComputerChoice();