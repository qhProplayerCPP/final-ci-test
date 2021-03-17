import React from 'react';
import '../css/StartButton.css';
const url =
  'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&fbclid=IwAR0B5f73P8ELsoDvJday4Id_c78pzrHXfEAk8_sy2mX2e6rTIFX6gqWfma8';

export class StartButton extends React.Component {
  total_score = 0;
  render() {
    return (
      <button
        onClick={() => {
          fetch(url)
            .then((resolve, reject) => {
              return resolve.json();
            })
            .then((data) => {
              document.getElementById('question').innerHTML = '';
              let arr_data = data.results;
              for (let i = 0; i < arr_data.length; i++) {
                document
                  .getElementById('question')
                  .insertAdjacentHTML('beforeend', `<h1 class="question-title">${arr_data[i].question}</h1>`);
                let random = Math.floor(Math.random() * 3 + 0);
                let k = 0;
                for (let j = 0; j < 4; j++) {
                  if (random === j) {
                    document
                      .getElementsByClassName('question-title')
                      [i].insertAdjacentHTML(
                        'afterend',
                        `<button class="correct${i} correct">${arr_data[i].correct_answer}</button><br>`
                      );
                  } else {
                    document
                      .getElementsByClassName('question-title')
                      [i].insertAdjacentHTML(
                        'afterend',
                        `<button class="incorrect${i} incorrect">${arr_data[i].incorrect_answers[k]}</button><br>`
                      );
                    k++;
                  }
                }
              }
            })
            .then(() => {
              for (let i = 0; i < 5; i++) {
                document.getElementsByClassName(`correct${i}`)[0].addEventListener('click', (e) => {
                  this.total_score += 10;
                  alert('Correct! Your score: ' + this.total_score);
                  for (let j = 0; j < 3; j++) {
                    document.getElementsByClassName(`incorrect${i}`)[0].remove();
                  }
                  document
                    .getElementsByClassName('question-title')
                    [i].insertAdjacentHTML('afterend', `<p class="total">Total point: ${this.total_score}</p><br>`);
                });
                for (let j = 0; j < 3; j++) {
                  document.getElementsByClassName(`incorrect${i}`)[j].addEventListener('click', (e) => {
                    alert('Incorrect! Your score: ' + this.total_score);
                    document.getElementsByClassName(`correct${i}`)[0].remove();
                    for (let j = 0; j < 3; j++) {
                      document.getElementsByClassName(`incorrect${i}`)[0].remove();
                    }
                    document
                      .getElementsByClassName('question-title')
                      [i].insertAdjacentHTML('afterend', `<p class="total">Total point: ${this.total_score}</p><br>`);
                  });
                }
              }
            });
        }}
        id="start-button"
      >
        Start
      </button>
    );
  }
}
