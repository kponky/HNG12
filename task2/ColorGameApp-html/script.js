const colorBox = document.getElementById('colorBox');
const colorOptions = document.querySelectorAll('.colorOption');
const gameStatus = document.getElementById('gameStatus');
const scoreElement = document.getElementById('gameScore');
const newGameBtn = document.getElementById('newGameBtn');

let gameScore = 0;
let targetColorCode;

const colors = {
  '#FF0000': 'red',
  '#00FF00': 'green',
  '#0000FF': 'blue',
  '#FFFF00': 'yellow',
  '#FFA500': 'orange',
  '#800080': 'purple'
};

// Function to shuffle and assign colors to buttons
function shuffleButtons() {
  const colorKeys = Object.keys(colors).sort(() => Math.random() - 0.5);
  
  colorOptions.forEach((button, index) => {
    button.style.backgroundColor = colors[colorKeys[index]];
  });
}

function startNewGame() {
  const colorKeys = Object.keys(colors);
  targetColorCode = colorKeys[Math.floor(Math.random() * colorKeys.length)]; // Pick a random color

  // Display the color code instead of actual color
  colorBox.textContent = targetColorCode;
  colorBox.style.backgroundColor = 'white'; // Keep background neutral for contrast

  shuffleButtons(); // Shuffle button colors

  // Reset game status text and color
  gameStatus.textContent = '';
  gameStatus.style.color = 'black';
}

colorOptions.forEach(button => {
  button.addEventListener('click', () => {
    if (button.style.backgroundColor === colors[targetColorCode]) {
      gameStatus.textContent = 'Correct!';
      gameStatus.style.color = 'green'; // Green text for correct answer
      gameScore++;
      scoreElement.textContent = gameScore;
      setTimeout(startNewGame, 1000); // Delay before starting a new round
    } else {
      gameStatus.textContent = 'Wrong! Try again.';
      gameStatus.style.color = 'red'; // Red text for wrong answer
      shuffleButtons(); // Reshuffle button colors even when the answer is wrong
    }
  });
});

newGameBtn.addEventListener('click', () => {
  gameScore = 0;
  scoreElement.textContent = gameScore;
  startNewGame();
});

startNewGame();
