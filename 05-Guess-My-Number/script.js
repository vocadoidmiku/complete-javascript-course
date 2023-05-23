'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const Secretnumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;

document.querySelector('.number').textContent = Secretnumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  // Win
  else if (guess === Secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number!!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  // Higher
  else if (guess > Secretnumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent = 'Too High!!';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'Losing';
    }
  }
  //lower
  else if (guess < Secretnumber) {
    if (Score > 1) {
      document.querySelector('.message').textContent = 'Too Low!!';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'Losing';
    }
  }
});
