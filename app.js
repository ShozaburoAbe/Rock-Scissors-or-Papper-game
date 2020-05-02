const startGameBtn = document.getElementById('start-game-btn');
// assgin them for prevent typo
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEAFULT_USER_CHOICE = ROCK;

gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${PAPER}`, "").toUpperCase(); 
  if (
    selection !== ROCK && 
    selection !== PAPER && 
    selection !== SCISSORS
    ) {
      alert(`Invaild choice! We chose ${DEAFULT_USER_CHOICE} for you!`);
      return DEAFULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
  
});