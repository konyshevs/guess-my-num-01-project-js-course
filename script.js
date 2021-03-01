'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

const atNum = 100;
let secretNum = Math.floor(Math.random() * atNum) + 1;
let score = 10;
let highScore = 0;
//Refresh game rules
document.querySelector('.score').textContent = score;
document.querySelector('.between').textContent = 'Between 1 and ' + atNum;
//'Check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    //When there is no input
    if (!guess) {
      displayMessage('⛔ Not a number!');
      // When player wins
    } else if (secretNum === guess) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = guess;
      displayMessage('🎉 Correct number!');
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //When guess is wrong
    } else {
      document.querySelector('.guess').value = '';
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');
      if (score <= 0) displayMessage('You lose the game!');
    }
  }
});

//'Again' button
document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.floor(Math.random() * atNum) + 1;
  score = 10;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
