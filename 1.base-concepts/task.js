"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let answer = -b / (2*a);
    arr.push(answer);
    return arr;
  } else {
    let answer = (-b + Math.sqrt(d))/(2*a);
    arr.push(answer);
    answer = (-b - Math.sqrt(d))/(2*a);
    arr.push(answer);
    return arr;
  }
  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let sum = 0;
  let monthPercentage = percent / 12 / 100;
  let sumOfDebt = amount - contribution;
  let monthlyPaying = sumOfDebt * (monthPercentage+(monthPercentage/(((1+monthPercentage)**countMonths)-1)));
  sum = +(monthlyPaying * countMonths).toFixed(2);   
  return sum;

}