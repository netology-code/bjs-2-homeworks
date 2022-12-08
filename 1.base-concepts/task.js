"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discrim = Math.pow(b, 2) - 4 * a * c;
  if (discrim >= 0 && a !== 0) {
    if (discrim === 0) {
      arr.push(-b / (2 * a));
    } else {
        arr.push((-b + Math.sqrt(discrim)) / (2 * a));
        arr.push((-b - Math.sqrt(discrim)) / (2 * a));
    }
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) 
    return false;
  let monthRate = percent / 100 / 12;  // месячная ставка
  let bodyOfTheLoan = amount - contribution; //тело кредита
  let monthPayment = bodyOfTheLoan * (monthRate + (monthRate / (Math.pow(1 + monthRate, countMonths) - 1)));
  let totalCount = monthPayment * countMonths;  
  return parseFloat(totalCount.toFixed(2));
}