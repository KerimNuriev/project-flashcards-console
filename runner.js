const readlineSync = require('readline-sync');
const { EOL } = require('os');
const Model = require('./model');
const View = require('./View');

const userName = readlineSync.question(`Выбери тему: Логика,Музыка,Кино${EOL}`);

const newModel = new Model(userName);
const newView = new View(newModel);

newView.run();
