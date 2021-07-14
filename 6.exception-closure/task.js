"use strict";

function parseCount(num) {

  if (isNaN(Number.parseInt(num))) {
    throw new Error("Невалидное значение");
  }

  return Number.parseInt(num);

}

function validateCount(num) {

  try{
    return parseCount(num);

  } catch(error) {

    return error;
  }

}

/* Задача 2 */

class Triangle {

  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.checkExistence();
  }

  checkExistence() {
    if(isNaN(this.a + this.b + this.c) || this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }

  }

  getPerimeter() {
    try {
      return this.perimetr = this.a + this.b +this.c;
    } catch (e) {
      throw new Error('Ошибка! Треугольник не существует');
    }
  }

  getArea() {

    try{
      let triangleSqrt = parseFloat(Math.sqrt(
          (this.perimetr / 2) * ((this.perimetr / 2) - this.a) * ((this.perimetr / 2) - this.b) * ((this.perimetr / 2) - this.c)
      ).toFixed(3));

      if(isNaN(triangleSqrt)) {
        throw new Error('Ошибка! Треугольник не существует');
      } else {

        return triangleSqrt;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

function getTriangle(a, b, c) {

  let triangle = new Triangle(a, b, c);

  try{
    return triangle;

  } catch (e) {
    triangle.getArea();
    triangle.getPerimeter();
  }

}

let triangle = new Triangle(1,3,100);
console.log(triangle.getPerimeter());

console.log(getTriangle(1,3,100));