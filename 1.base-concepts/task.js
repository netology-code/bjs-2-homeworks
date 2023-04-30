"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discrim = b ** 2 - 4 * a * c;
  if (discrim == 0) {
    arr[1] = -b / (2 * a);
  } else if (discrim > 0) {
    arr[1] = (-b + Math.sqrt(discrim)) / (2 * a);
    arr[2] = (-b - Math.sqrt(discrim)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percentMounth = percent / 1200;
  creditBody = amount - contribution;
  mounthPay = creditBody * (percentMounth + (percentMounth / (((1 + percentMounth) ** countMonths) - 1)));
  summToPay = contribution + creditBody + mounthPay * countMonths;
  return summToPay;
}