"use strict";

const parseCount = (value) => {
  const result = Number.parseInt(value, 10);
  if (result) {
    return result;
  } else {
    throw new Error("Невалидное значение");
  }
};

const validateCount = (value) => {
  try {
    return parseCount(value);
  } catch (e) {
    return e;
  }
};

class Triangle {
  constructor(sideA, sideB, sideC) {
    if (
      !(sideB + sideC > sideA && sideA + sideC > sideB && sideA + sideB > sideC)
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
  getArea() {
    const halfPerimeter = this.getPerimeter() / 2;
    return Number(
      Math.sqrt(
        halfPerimeter *
          (halfPerimeter - this.sideA) *
          (halfPerimeter - this.sideB) *
          (halfPerimeter - this.sideC)
      ).toFixed(3)
    );
  }
}

const getTriangle = (sideA, sideB, sideC) => {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch (e) {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
};
