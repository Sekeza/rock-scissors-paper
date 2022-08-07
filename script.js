const choiceArray = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choiceArray.length);
  const cpuChoice = choiceArray[randomNumber];
  return cpuChoice;
};

const playGameRound = (playerSelection, computerSelection) => {
    let userPick = playerSelection.toLowerCase();
    let cpuPick = computerSelection.toLowerCase();

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

playGameRoundD();



