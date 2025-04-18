console.log("Hello, World!");

// Generate random number to simulate cpu choice
// Maybe take the first number in stroing that is not
// a 0 instead of rerolling until * 10 is not 0?
// function getComputerChoice() {
//     let randNum = String(Math.random());
//     choice = +randNum.charAt(2);
//     if (choice === 0) {
//         console.log("got to if");
//         getComputerChoice();
//     } else {
//     return choice;
//     }
// }


function getComputerChoice() {
    const randNum = String(Math.random());
    let choice = 0;
    let i = 2;
    while (choice == 0 ?? i < randNum.length) {
        console.log(+randNum.charAt(i));
        choice = +randNum.charAt(i);
        i++;
    }
    if (choice >=1 && choice <=3) {
        choice = "I choose ROCK!";
    } else if (choice >=4 && choice <=6) {
        choice = "I choose PAPER!";
    } else {
        choice = "I choose SCISSORS!";
    }
    return choice;
}

console.log(getComputerChoice());