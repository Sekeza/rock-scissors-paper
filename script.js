const choiceArray = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choiceArray.length);
  const cpuChoice = choiceArray[randomNumber];
  return cpuChoice;
};



