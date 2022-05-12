'use strict'
function solveEquation(a, b, c) {
  let arr = new Array;
  const total = b ** 2 - 4 * a * c;
  if (total < 0) {
    return [];
  }
  if (total == 0) {
    const temp = -b/(2*a);
    arr.push(temp)
  }
  if (total > 0) {
    let temp = (-b + Math.sqrt(total) )/(2*a);
    arr.push(temp);
    temp = (-b - Math.sqrt(total) )/(2*a);
    arr.push(temp);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
