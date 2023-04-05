class shape{
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
}

// define circle class that extends shape and renders an SVG circle with size and position and fill color
class circle extends shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

// define square class that extends shape and renders an SVG square with size and position and fill color
class square extends shape{
    render(){
        return `<rect x="50" width="200" height="200" fill="${this.color}"/>`;
    }
}

// define triangle class that extends shape and renders an SVG triangle with size and position and fill color
class triangle extends shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
};

module.exports = {circle, square, triangle}
