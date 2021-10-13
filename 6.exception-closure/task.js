
function parseCount(value) {
    let result;
    result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result;
}

function validateCount(value) {
    let result;
    try {
        result = parseCount(value);
        return result;
    }
    catch (er) {
        return er;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let perimeter = this.getPerimeter() / 2;
        let area = (perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c));
        return +Math.sqrt(area).toFixed(3);
    }


}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (er) {

    }
    return {
        getArea: () => {
            return 'Ошибка! Треугольник не существует'
        },
        getPerimeter: () => {
            return 'Ошибка! Треугольник не существует'
        }
    };
}

