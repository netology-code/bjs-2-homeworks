"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - (4 * a * c);
  let arr = [];

  if (d < 0) return arr = [];
  if (d == 0) return arr = [(-b + Math.sqrt(d)) / (2 * a)];
  else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (isNaN(contribution)) return false;

  let price = 200000;
  contribution = amount * 30 / 100;
  percent = 12;
  countMonths = 15;

  let range = parseFloat(percent / 100 / 12); // каждый месяц столько %
  let creditBody = (amount - contribution); // сколько нужно вернуть в общем
  let perMonth = creditBody * range + (range / (((1 + range) * Math.pow(countMonths) - 1))); // сколько нужно выплачивать в месяц
  let toPay = perMonth / (Math.pow(1 + range, countMonths) - 1); // общая сумма
  return toPay.toFixed(2);
}
