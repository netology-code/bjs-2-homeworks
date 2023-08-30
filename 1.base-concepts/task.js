/* Задача №1 */
"use strict"
function solveEquation(a, b, c) {
  const discriminant = b**2 - 4 * a * c;
  if (discriminant > 0){
      return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
      return [- b / (2 * a)];
  }
  return [];
}


/* Задача №2 */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  }

  if (isNaN(contribution)) {
    return false;
  }

  if (isNaN(amount)) {
    return false;
  }

  let monthlyPercentage = ((percent/100)/12);
  let loanBody = (amount-contribution);
  let montlyPayment = (loanBody*(monthlyPercentage+(monthlyPercentage/(((1+monthlyPercentage)**countMonths)-1))));
  let totalAmount = (montlyPayment*countMonths);

  return +(totalAmount.toFixed(2));
}
    
console.log(calculateTotalMortgage(10, 0, 50000, 12));
