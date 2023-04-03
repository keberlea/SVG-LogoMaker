const shapes = require('./lib/shapes');


const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for the text:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want your text to be? (hex code)',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'What shape do you want your text to be in?',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape to be? (hex code)',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'What type of shape do you want?',
        choices: ['circle', 'square', 'triangle'],
    },
];