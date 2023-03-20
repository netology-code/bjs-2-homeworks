
"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discr = b ** 2 - 4 * a * c;
  
  if (discr > 0) {
    arr = [ (-b + Math.sqrt(discr))/(2 * a), (-b - Math.sqrt(discr))/(2 * a) ];
  } else if (discr == 0) {
      arr = [ -b / (2 * a) ];
  }

  return arr;
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(+percent) || isNaN(+contribution) || isNaN(+amount) || isNaN(countMonths)) {
      return false;
  }

  const percentMonths = percent / 1200;
  const bodyCredit = amount - contribution;
  const montlyPayment = bodyCredit * (percentMonths + (percentMonths / ((( 1 + percentMonths) ** countMonths) - 1))); 

  const total = montlyPayment * countMonths;
  return +total.toFixed(2);
}