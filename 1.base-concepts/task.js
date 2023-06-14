"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    let x = (-b + Math.sqrt(d)) / (2 * a);
    let y = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x, y);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let perc = (percent / 100) / 12;
  let credit = amount - contribution;
  let payment = credit * (perc + (perc / (Math.pow((1 + perc), countMonths) - 1)));
  let total = (payment * countMonths).toFixed(2);
  total = Number(total);
  return total;
}