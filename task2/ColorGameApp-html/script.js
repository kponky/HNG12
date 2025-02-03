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

function startNewGame() {
  const colorKeys = Object.keys(colors);
  const shuffledColors = [...colorKeys].sort(() => Math.random() - 0.5);

  targetColorCode = shuffledColors[0]; // Pick the first color as the correct one

  // Display the color code instead of actual color
  colorBox.textContent = targetColorCode;
  colorBox.style.backgroundColor = 'white'; // Keep background neutral for contrast

  // Shuffle the color keys to ensure all are unique in buttons
  const uniqueColors = shuffledColors.slice(0, colorOptions.length);

  // Place the colors in the buttons
  colorOptions.forEach((button, index) => {
    button.style.backgroundColor = colors[uniqueColors[index]];
  });

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
    }
  });
});

newGameBtn.addEventListener('click', () => {
  gameScore = 0;
  scoreElement.textContent = gameScore;
  startNewGame();
});

startNewGame();
