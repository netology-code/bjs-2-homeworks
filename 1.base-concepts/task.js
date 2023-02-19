"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2-4*a*c;
  if (d < 0){
    arr = [];
  }
  if (d == 0){
    const x = -b/(2*a);
    arr = [x];
  }
  if (d > 0){
    const x = (-b + Math.sqrt(d))/(2*a);
    const xTwo = (-b - Math.sqrt(d))/(2*a);
    arr = [x,xTwo];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}