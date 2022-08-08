const playerDisplay = document.querySelector("#player-display");
const computerDisplay = document.querySelector("#computer-display");
const resultDisplay = document.querySelector("#result-display");
const playerChoiceBtns = document.querySelectorAll("button");

let playerSelection;
let computerSelection;
let finalResult;

const choiceArray = ["Rock", "Scissors", "Paper"];

playerChoiceBtns.forEach(playerChoiceBtn => {
    playerChoiceBtn.addEventListener("click", (e) => {
        playerSelection =e.target.id;
        playerDisplay.textContent = playerSelection.toLowerCase();

        computerSelection = getComputerChoice();
        playGameRound(playerSelection, computerSelection);

        console.log("person: " + playerSelection); 
        console.log( "computer: " + computerSelection);
        
    });
});


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choiceArray.length);
  console.log( "randomNumber: " + randomNumber);
  const cpuChoice = choiceArray[randomNumber].toLowerCase();
  console.log( "cpuChoice: " + cpuChoice);
  computerDisplay.textContent = cpuChoice.toLowerCase();
  return cpuChoice;
};



const playGameRound = (playerSelection, computerSelection) => {

    if((playerSelection + computerSelection) === "rockscissors" || (playerSelection + computerSelection) === "paperrock" || (playerSelection + computerSelection) === "scissorspaper" ) {
        finalResult = "You win!"
    }
    else if((playerSelection + computerSelection) === "scissorsrock" || (playerSelection + computerSelection) === "rockpaper" || (playerSelection + computerSelection) === "paperscissors" ) {
        finalResult = "You lost!"
    }
    else if((playerSelection + computerSelection) === "rockrock" || (playerSelection + computerSelection) === "scissorsscissors" || (playerSelection + computerSelection) === "paperpaper" ) {
        finalResult = "It's a draw!"
    }
    else {
        finalResult = "Hope it won't get here!"
    }
    resultDisplay.textContent = finalResult;
};


// playerChoiceBtns.forEach(playerChoiceBtn => {
//     playerChoiceBtn.addEventListener("click", game);
// });


// const game = (e) => {
//     let userScore = 0; 
//     let cpuScore = 0;
//     for(let i = 0; i < 5; i++) {
//         playerPick = e.target.id;
//         playerDisplay.textContent = playerPick.toLowerCase();

//         cpuPick = getComputerChoice();
//         playGameRound(playerPick, cpuPick);

//         console.log("person: " + playerPick); 
//         console.log( "computer: " + cpuPick);

//         let result = playGameRound(playerPick, cpuPick);
//         if(result === "You win!") {
//              userScore++;
//         }
//         if(result === "You lost!") {
//              cpuScore++;  
//         }
//         console.log("userScore: " + userScore);
//         console.log("cpuScore: " + cpuScore);
//         console.log(result);        
//     }
//     return userScore > cpuScore ? "Player one wins" : userScore === cpuScore ? "It's a deuce-Draw" : "Computer wins";
// }

// let finalOutcome = game();
// console.log(finalOutcome); 




