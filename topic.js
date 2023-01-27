const fs = require('fs');
const { EOL } = require('os');
class Topic {
    constructor(topics) {
        this.topics = topics;
    }

    readTopic () {
        const readTopic = fs.readFileSync(`${__dirname}/topics/${this.topics}.txt`, 'utf-8'); 
        const arrTopic =  readTopic.split(EOL);
        return arrTopic[0]
    }
}

module.exports = Topic;