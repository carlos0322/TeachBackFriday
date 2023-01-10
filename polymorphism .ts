interface Shape {
    area(): number;
    perimeter(): number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle implements Shape {
    constructor(public radius: number) {}
    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

function getShapeInfo(shape: Shape) {
    console.log(`Area: ${shape.area()}`);
    console.log(`Perimeter: ${shape.perimeter()}`);
}

const rectangle = new Rectangle(4, 5);
getShapeInfo(rectangle);
// Output:
// Area: 20
// Perimeter: 18

const circle = new Circle(4);
getShapeInfo(circle);
// Output:
// Area: 50.26548245743669
// Perimeter: 25.132741228718345
