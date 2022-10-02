const a = validateCount("5615");
console.log(a);
const b = validateCount("qweqw");

const triangle1 = new Triangle(4, 5, 6);
// new Triangle(4, 5, 18);
// new Triangle(18, 5, 6);
// new Triangle(4, 18, 6);

triangle1.getPerimeter();
triangle1.getArea();

const triangle = getTriangle(1, 4, 100);
