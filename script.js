
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;



function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Tidligere gæt: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Tillykke, dit gæt var rigtigt!';
    lastResult.style.backgroundColor = 'var(--orange)';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = ':( du har tabt spillet - vil du prøve igen?';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Forkert!';
    lastResult.style.color = 'var(--white)';
    lastResult.style.fontWeight = '600';

    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Dit sidste gæt var for lavt!' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Dit sidste gæt var for højt!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener("click", e => {
    checkGuess();
  })


function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Nyt spil';
  document.querySelector('main').appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'var(--orange)';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}