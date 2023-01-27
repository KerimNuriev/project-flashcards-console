const fs = require('fs');
const { EOL } = require('os');


class Model {
    constructor(topic) {
        this.topic = topic;
    }

    // readTopic () {
    //     const topicLogic = fs.readFileSync(`${__dirname}/topics/${this.topic}.txt`, 'utf-8'); 
    //     const arrLogic = topicLogic.split(EOL);
    //     const arrQuestion 
    // }

    readAsk () {
        const ask = fs.readFileSync(`${__dirname}/topics/${this.topic}.txt`, 'utf-8'); 
        const arrAsk = ask.split(EOL);
        const arrQuestion = arrAsk.filter((el, index) => index % 2 === 1);
        return arrQuestion;
    }

    readAnswers () {
        const answer = fs.readFileSync(`${__dirname}/topics/${this.topic}.txt`, 'utf-8'); 
        const arrAnswer = answer.split(EOL);
        const arrAns = arrAnswer.filter((el, index) => index % 2 === 0);
        return arrAns;
    }

    topic () {
        return this.topics; 
    }

    ask () {
        return this.questions;
    }

    answer () {
        return this.answers;
    }
}

module.exports = Model;