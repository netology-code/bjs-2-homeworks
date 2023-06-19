"use strict"

function solveEquation(a,b,c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) return false;
  let discriminant = Math.pow(b,2) -4*a*c;
  let answer = [];
  if (discriminant<0) {
    console.log("корней нет")
  }
  else if(discriminant==0) {
    answer.push(-b/(2*a));
  }
  else {
    answer.push((-b + Math.sqrt(discriminant))/(2*a));
    answer.push((-b - Math.sqrt(discriminant))/(2*a));
  }
  return answer;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) return false;
  let mPercent = (percent/100)/12;
  let body = amount - contribution;
  let mPayment = body * (mPercent + (mPercent / (((1 + mPercent)**countMonths) - 1)));
  let overall = Number((mPayment*countMonths).toFixed(2));
  console.log(overall);
  return overall;
}
