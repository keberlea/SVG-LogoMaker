const {circle, square, triangle} = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');


// define array of 'questions' using inquirer to determine text, text color, shape color, and shape type.
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

// function to write data to file
// create a function to write to the shapes.svg file
function writeSvgFile(fileName, data) {
    fs.writeFile('shapes.svg', shapes, function(err){
        if (err) throw err;
        console.log('Svg File Saved!');
        
    });


}


// function to initialize program
function init() {
    // prompt user for answers
    let answers = inquirer.prompt(questions);
    // user text
    let text = '';

        // 1-3characters valid
        if (text.length > 3 || text.length < 1) {
            text =  answers.text;
        } else {
        // 0 or 4+ invalid
        console.log('Please enter 1-3 characters');
        return;
        }
        // log users text
        console.log('Text: '+ text);

    // user text color
    let textColor = answers.textColor;
    // log users text color 
    console.log('Text Color: '+ textColor);
    // shape color
    let shapeColor = answers.shapeColor;
    // log users shape color
    console.log('Shape Color: '+ shapeColor);
    // shape type
    let shapeType = answers.shapeType
    // log users shape type
    console.log('Shape Type: '+ shapeType);

    let userShapeType;
    if (shapeType === 'circle') {
        userShapeType = new circle();
        console.log('Circle shape type selected.')
    } 
    else if (
        shapeType === 'square') {
        userShapeType = new square();
        console.log('Square shape type selected.')
    }
    else if (
        shapeType === 'triangle') {
        userShapeType = new triangle();
        console.log('Triangle shape type selected.')
    };
    //sets selected shape to selected color
    userShapeType.setColor(shapeColor);

    //create a new SVG and add shape and text to it
    let svg = new SVG();
    svg.addShape(userShapeType);  
    svg.addText(text, textColor);
    svgString = svg.render();

    //print shape to log
    console.log('Displaying shape: \n\n ' + svgString);

    console.log('Shape generation complete!');
    console.log('writing shape to file...')
    writeSvgFile('shapes.svg', svgString);

}

//function call to initialize program
init();