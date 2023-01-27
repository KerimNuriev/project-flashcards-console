class Model {
    constructor(topics, questions, answers) {
        this.topics = topics;
        this.questions = questions;
        this.answers = answers;
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