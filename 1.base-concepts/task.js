"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0) {
    arr.push();
  } 
  if (d === 0) {
    arr.push(-b/(2*a));
  } 
  if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100/12;
  let loanBody = amount - contribution;
  let monthlyFee = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let sum = (monthlyFee * countMonths).toFixed(2);
  return(Number(sum));
}