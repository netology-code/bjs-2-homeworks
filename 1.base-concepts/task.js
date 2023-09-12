"use strict"
function solveEquation(a, b, c) {
  if(a == 0)
      return false;
  let arr = [];
  let D = b * b - 4 * a * c;
  console.log('D = ' + D);
  if(D < 0)
  return arr = [];
if(D == 0)
      arr = (-b + Math.sqrt(D)) / (2 * a);
  else if(D > 0){
      let tmp = [];
      tmp.push((-b + Math.sqrt(D)) / (2 * a));
      tmp.push((-b - Math.sqrt(D)) / (2 * a));
      arr = tmp;
  }
  return arr;
}

console.log(solveEquation(1,12,36));



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  // Рачитываем ежемесячную процентную ставку и тело кредиьап
    
    let S = amount-contribution; // тело кредита
    let P = percent/12/100; // ежемесячная процентная ставка

  // Расчитываем ежемесячный платеж

    let x = Math.pow(1+P, countMonths);
    let monthPayment = S *(P + (P/(x-1)));

  // Расчитываем общую сумму платежа и округляем до 2х знаков

    let totalPayment = (monthPayment*countMonths).toFixed(2);

     return  totalPayment;
}

console.log(calculateTotalMortgagen(10,0,5000,12));



