"use strict";

function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  const monthPercent = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthlyPayment =
    creditBody *
    (monthPercent +
      monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1));
  const fullPayment = Number((monthlyPayment * countMonths).toFixed(2));

  return fullPayment;
}
