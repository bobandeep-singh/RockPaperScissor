console.log("Bobandeep Singh console output");

var userScore = 0;
var compScore = 0;
const setTimeoutTime = 500;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_div = document.querySelector(".results > p");
const rockId_div = document.getElementById("rock");
const paperId_div = document.getElementById("paper");
const scissorId_div = document.getElementById("scissor");
const userLowerCase = "User".fontsize(4);
const computerLowerCase = "Computer".fontsize(4);

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
getComputerChoice();

function userWins(userChoice, ComputerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    //results_div.innerHTML = userChoice.toUpperCase() + " BEATS " + ComputerChoice.toUpperCase() + ". YOU WON! ";
    results_div.innerHTML = `${userChoice.toUpperCase()}${userLowerCase}  BEATS  ${ComputerChoice.toUpperCase()}${computerLowerCase}. <br> YOU WON!`;
    
    //Adding a class with some styles to change the style of buttons on click
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow') }, setTimeoutTime);//This function will say wait for x milliseconds, which is the 2nd argument, and then execute the function
}

function computerWins(userChoice, ComputerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    //results_div.innerHTML = ComputerChoice.toUpperCase() + " BEATS " + userChoice.toUpperCase() + ". YOU LOST! ";
    results_div.innerHTML = `${ComputerChoice.toUpperCase()}${computerLowerCase}  BEATS  ${userChoice.toUpperCase()}${userLowerCase}. <br> YOU LOST!`;
    
    //Adding a class with some styles to change the style of buttons on click
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow') }, setTimeoutTime);//This function will say wait for x milliseconds, which is the 2nd argument, and then execute the function
}

function draw(userChoice, ComputerChoice){
    results_div.innerHTML = `${ComputerChoice.toUpperCase()}${computerLowerCase}  EQUALS  ${userChoice.toUpperCase()}${userLowerCase}. <br> IT'S A DRAW`;
    
    //Adding a class with some styles to change the style of buttons on click
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), setTimeoutTime);//This function will say wait for x milliseconds, which is the 2nd argument, and then execute the function
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    //console.log("Computer choice: " + computerChoice);
    //console.log("User choice: " + userChoice);

    switch (userChoice + " & " + computerChoice) {
        case "rock & scissor":
        case "paper & rock":
        case "scissor & paper":
            console.log("USER WINS");
            userWins(userChoice, computerChoice);
            break;

        case "rock & paper":
        case "paper & scissor":
        case "scissor & rock":
            console.log("COMPUTER WINS");
            computerWins(userChoice, computerChoice);
            break;

        case "rock & rock":
        case "paper & paper":
        case "scissor & scissor":
            console.log("ITS A DRAW");
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {

    rockId_div.addEventListener('click', function () {
        game("rock");
        //console.log("Hey, you have clicked on rock button");
    });

    paperId_div.addEventListener('click', () => { game("paper"); });

    scissorId_div.addEventListener('click', () => game("scissor") );
}

main();