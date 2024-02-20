//1.Написать программу для решения квадратных уравнений (ax² + bx + c = 0).

"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

console.log(solveEquation());



//2.Написать калькулятор для расчёта выплат по ипотеке. Напишите функцию, которая будет принимать процентную ставку, 
//сумму первоначального взноса, сумму кредита и срок (длит кредита в месяцах) и выдавать сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit = amount - contribution;
  let monthlyPercent = percent / 100 / 12;
  let monthlyPayment = bodyCredit * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1));
  let totalAmount = countMonths * monthlyPayment;
  return +totalAmount.toFixed(2);
}
  
console.log(calculateTotalMortgage(10, 1000, 20000, 24));

