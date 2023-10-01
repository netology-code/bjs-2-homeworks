"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b**2 - 4*a*c;

  if (discriminant == 0) {
    arr.push(-b / (2*a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) ) / (2*a));
    arr.push((-b - Math.sqrt(discriminant) ) / (2*a));
  }
  console.log(arr);
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentage = percent / 100 / 12; // 1/12 процентной ставки (от 0 до 1)
  const body  = amount - contribution; //тело кредита
  
  const monthPayment = body * (percentage + (percentage / (((1 + percentage)**countMonths) - 1)));
  const sum = +((monthPayment * countMonths).toFixed(2));

  return sum;
}