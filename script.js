const choiceArray = ["Rock", "Scissors", "Paper"];


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choiceArray.length);
  const cpuChoice = choiceArray[randomNumber];
  return cpuChoice;
};

let computerSelection;
let userInput;

const playGameRound = (playerSelection, computerSelection) => {
    let userPick = playerSelection;
    let cpuPick = computerSelection;

    console.log("person: " + userPick); 
    console.log( "computer: " + cpuPick);

    if((userPick + cpuPick) === "rockscissors" || (userPick + cpuPick) === "paperrock" || (userPick + cpuPick) === "scissorspaper" ) {
        return "You win!"
    }
    else if((userPick + cpuPick) === "scissorsrock" || (userPick + cpuPick) === "rockpaper" || (userPick + cpuPick) === "paperscissors" ) {
        return "You lost!"
    }
    else if((userPick + cpuPick) === "rockrock" || (userPick + cpuPick) === "scissorsscissors" || (userPick + cpuPick) === "paperpaper" ) {
        return "It's a draw!"
    }
    else {
        return "Dont get there!"
    }
};


const game = () => {
    let userScore = 0; 
    let cpuScore = 0;
    for(let i = 0; i < 5; i++) {
        userInput = prompt("Enter either 'Rock', 'Paper', 'Scissors' to play: ").toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        
        console.log("userInput: " + userInput);
        console.log("computerSelection: " + computerSelection);

        let result = playGameRound(userInput, computerSelection);
        if(result === "You win!") {
             userScore++;
        }
        if(result === "You lost!") {
             cpuScore++;  
        }
        console.log("userScore: " + userScore);
        console.log("cpuScore: " + cpuScore);
        console.log(result);        
    }
    return userScore > cpuScore ? "Player one wins" : userScore === cpuScore ? "It's a deuce-Draw" : "Computer wins";
}

let finalOutcome = game();
console.log(finalOutcome); 




