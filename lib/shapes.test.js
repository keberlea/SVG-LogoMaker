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

//triangle shape
