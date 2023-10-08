'use strict'

// task1


class Figure {    
    constructor(width, height) {
        this.styles = {
            'margin': '10px auto',            
            'background-color': `${this.rand_color()}`,            
            'width': width + 'px',            
            'height': height + 'px'        
        }    
    }    
    
    add_property(property, value) {        
        this.styles[property] = value;    
    }    
    
    generate_style() {        
        let str = ``;        
        for (let key in this.styles) {            
            str += key + ':' + this.styles[key] + ';';        
        }        
        
        return str    
    }    
    
    rand_color() {    
        return (`#` + Math.floor(Math.random() * 16777216).toString(16)).toUpperCase(); // task3
    }

    render() {        
        document.write(`<div style="${this.generate_style()}"></div>`);    
    }

}

class Square extends Figure {    
    constructor(width, height = width) {        
        super(width, height);    
    }

}

class Rectangle extends Square {    
    constructor(width, height) {        
        super(width, height);    
    }

}

class Circle extends Square {    
    constructor(width, height = width) {        
        super(width, height);    
    }    
    
    render() {        
        this.add_property('border-radius', '50%');        
        document.write(`<div style="${this.generate_style()}"></div>`);    
    }
}

class Ellipse extends Rectangle {    
    constructor(width, height) {        
        super(width, height);    
    }    
    
    render() {        
        this.add_property('border-radius', '50%');        
        document.write(`<div style="${this.generate_style()}"></div>`);    
    }
}

class Rhombus extends Square {    
    constructor(width, height = width) {        
        super(width, height);    
    }    
    
    render() {        
        this.add_property('transform', 'rotate(45deg)');        
        document.write(`<div style="${this.generate_style()}"></div>`);    
    }
}

class SemiCircle extends Rectangle {
    constructor(width, height) {        
        super(width, height);    
    }

    render() {        
        this.add_property('border-top-right-radius', '1000px');
        this.add_property('border-top-left-radius', '1000px');          
        document.write(`<div style="${this.generate_style()}"></div>`);    
    }
}

// task2

class Parralelogram extends Rectangle {
    constructor(width, height) {        
        super(width, height);    
    }

    render() {        
        this.add_property('transform', 'skew(20deg)');        
        document.write(`<div style="${this.generate_style()}"></div>`);    
    }
}

const question = +prompt('Whats a figure you want?');
const parametr = +prompt('What a length side?');
const figure = function (question, parametr) {    
    if (question === 1) {        
        new Square(parametr).render();    
    } 

    if (question === 2) {        
        const parametr2 = prompt('What a length side 2?');       
        new Rectangle(parametr, parametr2).render();    
    }

    if (question === 3) {        
        new Circle(parametr).render();    
    }    
    
    if (question === 4) {        
        const parametr2 = prompt('What a length side 2?');        
        new Ellipse(parametr, parametr2).render();    
    }    
    
    if (question === 5) {        
        new Rhombus(parametr).render();    
    }

    if (question === 6) {
        const parametr2 = prompt('What a length side 2?'); 
        new SemiCircle(parametr, parametr2).render();
    }

    if (question === 7) {
        const parametr2 = prompt('What a length side 2?'); 
        new Parralelogram(parametr, parametr2).render();
    }
}

figure(question, parametr);



