class QuestionAnswer {
    constructor(questions, answer) {
        this.questions = questions;
        this.answer = answer;
    }

    readAsk () {
        return this.questions;
    }
}
module.exports = QuestionAnswer;