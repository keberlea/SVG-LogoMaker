const fs = require('fs');


//create a function to write to the shapes.svg file
function writeSvgFile(shapes) {
    fs.writeFile('shapes.svg', shapes, function(err){
        if (err) throw err;
        console.log('Svg File Saved!');
        //write svg to the file
    });
    fs.appendFile('shapes.svg', shapes, function(err){
        if (err) throw err;
        console.log('Svg File Saved!');
    });

}

//write this to svg file using fs and inquirer
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>