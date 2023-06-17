"use strict"

function solveEquation(a,b,c) {
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
  
}