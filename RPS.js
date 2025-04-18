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
    return choice;
}

console.log(getComputerChoice());