'use strict';

function solveEquation(a, b, c) {
  let arr;

  arr = [];

  let D = Math.pow(b, 2) - 4 * a * c;

  if (D === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }

  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let monthlyPayment = 0;

  const dateNow = new Date();
  const dateMinAllow = new Date(new Date().setMonth(new Date().getMonth() + 1));
  const P = ((+percent / 100) * 1) / 12;
  const mortgageBody = +amount - +contribution;
  const totalMonth =
    date.getMonth() - dateNow.getMonth() + 12 * (date.getYear() - dateNow.getYear()); // не уверен в точности данного вычисления нужно ли как то округлять месяцы по дням..

  if (percent === '' || +percent <= 0 || !Number.isInteger(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (contribution === '' || +contribution < 0 || !Number.isInteger(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (amount === '' || +amount <= 0 || !Number.isInteger(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else if (
    +date <= 0 ||
    !Number.isInteger(Date.parse(date)) ||
    Date.parse(date) <= dateMinAllow.getTime()
  ) {
    return `Параметр "Срок ипотеки" должен быть больше месяца`;
  } else {
    console.log('totalMonth', totalMonth);
    monthlyPayment = mortgageBody * (P + P / (Math.pow(1 + P, totalMonth) - 1));
    totalAmount = +(monthlyPayment * totalMonth).toFixed(2);
  }

  return totalAmount;
}
