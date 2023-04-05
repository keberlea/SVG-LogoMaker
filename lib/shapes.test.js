//import shape classes from shapes.js file
const {circle, square, triangle } =  require ('./shapes')

//test check wether circle, square, or triangle object is rendered correctly

//circle shape
describe('circle', () => {
    test('renders correctly', () => {
        const shape = new circle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toBe(`<circle cx="100" cy="100" r="50" fill="${color}"/>`)
    });
});

//square shape
describe('square', () => {
    test('renders correctly', () => {
        const shape = new square();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toBe(`<rect x="100" y="100" width="100" height="100" fill="${color}"/>`)
    });
});


//triangle shape
describe('triangle', () => {
    test('renders correctly', () => {
        const shape = new triangle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toBe(`<polygon points="100,100 200,100 150,200" fill="${color}"/>`)
    });
});

