const readlineSync = require('readline-sync');
const fs = require('fs');
const { EOL } = require('os');
const Model = require('./model');

class View {
  constructor(model) {
    this.model = model;
  }

  run() {
    const fingerDown = '👎';
    const fingerUp = '👍';
    let count = 0;
    for (let i = 0; i < this.model.readAsk().length; i++) {
      const ask = this.model.readAsk()[i];
      let answer = this.model.readAnswers()[i + 1];
      let userName = readlineSync.question(`${EOL}${ask}${EOL}Ответ: `);
      if (typeof userName === 'string') {
        userName = userName.toLowerCase();
        answer = answer.toLowerCase();
      }
      if (userName === answer) {
        console.log(`4ётко!${EOL}${fingerUp.repeat(20)}`);
        count += 1;
      } else {
        console.log(
          `мдааааааа, ващет правильно ${
            this.model.readAnswers()[i + 1]
          }${EOL}${fingerDown.repeat(20)}`
        );
      }
      if (i === this.model.readAsk().length - 1) {
        if (count >= 4) {
          console.log(
            `${EOL}Вы набрали ${count} правильных ответов! Обоссаться.`
          );
          console.log('Вот это ты вундеркиндер!');
        } else {
          console.log(
            `${EOL}Вы набрали ${count} правильных ответов! Обоссаться.`
          );
          console.log(
            'Мда, братишка, квизы не твоё. Надеюсь, код пишешь ты лучше :)'
          );
        }
      }
    }
  }
}

module.exports = View;
