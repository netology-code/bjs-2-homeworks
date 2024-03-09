"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  percent = percent / 100 / 12;

  let loanAmount = amount - contribution;
  let monthlyPayment = loanAmount * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  return parseFloat(totalPayment.toFixed(2));

}