const readlineSync = require('readline-sync');
const Model = require('./model'); 
// Wait for user's response.
const {EOL} = require("os")
let userName = readlineSync.question(`Выберите тему:${EOL}Логика${EOL}Музыка${EOL}Пословицы${EOL}`);

console.log('Hi ' + userName + '!');

class View extends Model{
    constructor(topic) {
        super(topic);
    }

    run() {
    let userName = readlineSync.question(`Выберите тему:${EOL}Логика${EOL}Музыка${EOL}Пословицы${EOL}`);
    
    console.log(`Hi ${userName}`);
    console.log('Hi ' + userName + '!');

    }
}
module.exports = View;
