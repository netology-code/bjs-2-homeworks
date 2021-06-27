"use strict";

function solveEquation(a, b, c) {
  let result,
    arr = [],
    D = Math.pow(b, 2) - 4 * a * c;

  switch (true) {
    case D < 0:
      arr = [];
      break;
    case D === 0:
      result = -b / (2 * a);
      arr.push(result);
      break;
    case D > 0:
      result = (-b + Math.sqrt(D)) / (2 * a);
      arr.push(result);
      result = (-b - Math.sqrt(D)) / (2 * a);
      arr.push(result);
      break;
    default:
      arr = [];
      break;
  }

  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let loanBody,
    now = new Date(),
    numberOfMonths = monthDiff(now, date),
    loanInterest, 
    monthlyPayment, 
    totalAmount;

  if (isNaN(Number(percent))) {
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (isNaN(Number(contribution))) {
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }

  if (isNaN(Number(amount))) {
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  loanBody       = amount - contribution;
  loanInterest   = (percent / 100) / 12;
  monthlyPayment = loanBody * (loanInterest + loanInterest / (Math.pow((1 + loanInterest), numberOfMonths) - 1));
  
  totalAmount = monthlyPayment * numberOfMonths;
  totalAmount = Number(totalAmount.toFixed(2));
  console.log(`Общая сумма к выплате составит: ${totalAmount}`)

  return totalAmount;
}

function monthDiff(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
}