'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  const total = b ** 2 - 4 * a * c;
  if (total == 0) {
    arr.push(-b/(2*a))
  }
  if (total > 0) {
    arr.push((-b + Math.sqrt(total) )/(2*a));
    arr.push((-b - Math.sqrt(total) )/(2*a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
