function parseCount(value) {
  const number = parseInt(value, 10);
  if (isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
}

function validateCount(value) {
  try {
    return (number = parseCount(value));
  } catch (error) {
    console.log(error);
    return error;
  }
}

class Triangle {
  constructor(first, second, third) {
    if (first + second < third || first > second + third || first + third < second) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.first = first;
    this.second = second;
    this.third = third;
  }

  getPerimeter() {
    return this.first + this.second + this.third;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    let area = Math.sqrt(p * (p - this.first) * (p - this.second) * (p - this.third));
    return Math.round(area * 1000) / 1000;
  }
}

function getTriangle(first, second, third) {
  try {
    return new Triangle(first, second, third);
  } catch (error) {
    const error2 = "Ошибка! Треугольник не существует";
    return { getArea: () => error2, getPerimeter: () => error2 };
  }
}
