function parseCount(goodsQuantity) {
  const parsed = Number.parseFloat(goodsQuantity);
  if (isNaN(parsed)) {
    throw new Error('Невалидное значение');
  }
  return parsed;
}

function validateCount(goodsQuantity) {
  try {
    return parseCount(goodsQuantity);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor (side1, side2, side3) {
    if (((side1 + side2) < side3) || ((side2 + side3) < side1) || ((side1 + side3) < side2)) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get perimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  get area() {
    const halfPerimetr = (this.side1 + this.side2 + this.side3) / 2;
    return +((Math.sqrt(halfPerimetr * (halfPerimetr - this.side1) * (halfPerimetr - this.side2) * (halfPerimetr - this.side3))).toFixed(3));
  }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
  } catch(error) {
    console.log({get perimeter() {return "Ошибка! Треугольник не существует"}, get area() {return "Ошибка! Треугольник не существует"}});
    return {get area() {return "Ошибка! Треугольник не существует"}, get perimeter() {return "Ошибка! Треугольник не существует"}};
  }
}

const triangle = getTriangle(1,3,100);
  triangle.area;
  triangle.perimeter;