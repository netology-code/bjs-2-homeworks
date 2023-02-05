"use strict";

function solveEquation(a, b ,c) {
  let arr = [];
  let d = b ** 2 - 4* a * c;

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  else if (d === 0) {
    let x3 = d - b/(2*a);
    arr.push(x3);
  }
  return arr;
}
console.log(solveEquation(1, 2, -10));

