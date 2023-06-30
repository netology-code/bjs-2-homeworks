"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const desk = (b**2)-4*a*c;

  if (desk === 0) {
    arr[0] = -b/(2*a);
  };

  if (desk > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  };  

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
const percent1 = percent/100;
const P = percent1/12;
const S = amount - contribution;
const monthPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
const total = monthPayment * countMonths;

return total.toFixed(2)
}