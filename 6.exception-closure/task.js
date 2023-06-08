
// Задание 1
function parseCount (value) {
    const number = Number.parseFloat(value);
    if (isNaN (number)) {
        throw new Error ('Невалидное значение');        
    }
    else{
        return number;
    } 
    
}     

function validateCount (value) {
    try {
        return parseCount (value);
    }
    catch (err) {
        return err;
    }
}

// Задание 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    
        if (a + b < c || a + c < b || b + c < a) {
           throw new Error ('Треугольник с такими сторонами не существует');
        }       
    }

    
    
getPerimeter() {
    let p = 0;
   p = (this.a + this.b + this.c)/2;
    this.p;
}
getArea() {
    let S = 0;
return S = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));

}
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (err) {
        return new Object({
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        });
    }
}
console.log(getTriangle(1, 10, 3));
/*
class Triangle {
   constructor(a, b, c) {
       this.a = a;
       this.b = b;
       this.c = c;
       this.p = 0;
       this.s = 0;
   
       if (a + b < c || a + c < b || b + c < a) {
          throw new Error ('Треугольник с такими сторонами не существует');
       }       
   }

   
   
   getPerimeter() {
       this.p = (this.a + this.b + this.c)/2;
       return this.p;
   }
   getArea() {
       this.s = Number(Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)).toFixed(3));
       return this.s;

   }
}

function getTriangle(a, b, c) {
   try {
       return new Triangle(a, b, c);
   }
   catch (err) {
       
   }
}
const triangle = getTriangle(10, 10, 10);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());
*/