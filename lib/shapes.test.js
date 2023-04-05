//import shape classes from shapes.js file
const {circle, square, triangle } =  require ('./shapes')

//test check wether circle, square, or triangle object is rendered correctly

//circle shape
describe('circle', () => {
    test('renders correctly', () => {
        const shape = new circle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toBe(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`)
    });
});

//square shape
describe('square', () => {
    test('renders correctly', () => {
        const shape = new square();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toBe(`<rect x="50" width="200" height="200" fill="${color}"/>`)
    });
});


//triangle shape
describe('triangle', () => {
    test('renders correctly', () => {
        const shape = new triangle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toBe(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`)
    });
});

