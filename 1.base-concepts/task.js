function solveEquation(a, b, c) {
  "use strict"
  // код для задачи №1 писать здесь
  let arr = [];
  let D = b**2 - 4*a*c; // формула дискримента

 if (D === 0) {
     arr.push((-b + Math.sqrt(D)) / (2 *a));
 } else if (D > 0) {
     arr.push((-b + Math.sqrt(D)) / (2 *a));
     arr.push((-b - Math.sqrt(D)) / (2 *a));
 };
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
