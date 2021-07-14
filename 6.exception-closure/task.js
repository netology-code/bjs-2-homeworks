"use strict";

function parseCount(num) {

  if (isNaN(Number.parseInt(num))) {
    throw new Error("Невалидное значение");
  }

  return Number.parseInt(num);

}

function validateCount(num) {

  try {
    return parseCount(num);

  } catch (error) {

    return error;
  }

}

/* Задача 2 */

class Triangle {

  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (isNaN(a + b + c) || a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.perimetr = this.a + this.b + this.c;
  }

  getArea() {

    return +(Math.sqrt(
      (this.perimetr / 2) * ((this.perimetr / 2) - this.a) * ((this.perimetr / 2) - this.b) * ((this.perimetr / 2) - this.c)
    ).toFixed(3));

  }

}

function getTriangle(a, b, c) {

  try {
    return new Triangle(a, b, c);

  } catch (e) {
    return {
      getArea: () => 'Ошибка! Треугольник не существует',
      getPerimeter: () => 'Ошибка! Треугольник не существует'
    }
  }

}
