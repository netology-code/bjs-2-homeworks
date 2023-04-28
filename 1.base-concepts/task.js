"use strict"

function solveEquation(a, b, c) {

  if(a === 0) {
   alert('Ошибка, a = 0 недостимое значение!');
   return;
 }
let d = b*b - 4 * a * c;
let x1, x2;

 if(d < 0) return [];
 
  if(d === 0) {
   return [
   x1 = -b / 2 * a
  ];
 }
 
 return [
   x1 = (-b + Math.sqrt(d)) / (2 * a),
   x2 = (-b - Math.sqrt(d)) / (2 * a),
 ];
}

console.log(solveEquation(1,6,1));




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let rate,
      ratePerMonth,
      loanBody,
      payment,
      totalLoanAmount;

    // ставка в диапазоне от 0 до 1
   rate = percent / 100;
  
    // ставка в месяц 
   ratePerMonth = rate / 12;

   // тело кредита
   loanBody = amount - contribution;

    // ежемесячная оплата
   payment = loanBody * (ratePerMonth + (ratePerMonth / (((1 + ratePerMonth) ** countMonths) - 1)));
  
   //итоговая сумма кредита 
   totalLoanAmount = + (payment * countMonths).toFixed(2);
  
   console.log('Итоговая сумма кредита: ' + totalLoanAmount);
  
   return totalLoanAmount;
}

calculateTotalMortgage(15, 0, 10000, 36);
