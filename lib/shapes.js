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
    constructor(){
        super();
        this.radius = 50;
        this.x = 100;
        this.y = 100;
    }
    render(){
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}"/>`;
    }
}

// define square class that extends shape and renders an SVG square with size and position and fill color
class square extends shape{
    constructor(){
        super();
        this.width = 100;
        this.height = 100;
        this.x = 100;
        this.y = 100;
    }
    render(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;
    }
}

// define triangle class that extends shape and renders an SVG triangle with size and position and fill color
class triangle extends shape{
    constructor(){
        super();
        this.width = 100;
        this.height = 100;
        this.x = 100;
        this.y = 100;
    }
    render(){
        return `<polygon points="${this.x},${this.y} ${this.x + this.width},${this.y} ${this.x + this.width/2},${this.y + this.height}" fill="${this.color}"/>`;
    }
};

module.exports = {circle, square, triangle}
