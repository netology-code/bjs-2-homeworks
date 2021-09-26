"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (discriminant === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
  else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(percent)) {
    return 'Параметр "Процентная ставка" содержит неправильное значение ' + "\"" + `${String(percent)}` + "\"";

  }
  if (isNaN(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение ' + "\"" + `${contribution}` + "\"";

  }
  if (isNaN(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение ' + "\"" + `${amount}` + "\"";
  }



  let totalAmount = 0;
  let creditBody = 0;
  let percentDoubleMonth = 0;
  let payment = 0;
  creditBody = parseInt(amount - contribution);
  let clientDate = new Date(date);
  let currentDate = new Date();
  let resultDate = 0;
  resultDate = monthDiff(clientDate, currentDate);

  percentDoubleMonth = parseFloat(+percent / 100 / 12);
  payment = creditBody * (percentDoubleMonth + percentDoubleMonth / (((1 + percentDoubleMonth) ** resultDate) - 1));
  totalAmount = (payment * resultDate);
  console.log(totalAmount);
  return + totalAmount.toFixed(2);
}

function monthDiff(d1, d2) {
  let months = 0;
  months = (d1.getFullYear() - d2.getFullYear()) * 12;
  months -= d2.getMonth();
  months += d1.getMonth();
  return months <= 0 ? 0 : months;
}


