"use strict"
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d == 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }
  console.log(arr);
  return arr;
}

solveEquation(1, 2, 8);

// код для задачи №2 писать здесь

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  /* Описание переменных
  percent: процент
  contribution: взнос
  amount: сумма
  countMonths: кол-во месяцев
  BodyCredit: тело кредита
  PayMount: ежемесячный платеж
  */
  let BodyCredit = amount - contribution;
  let PayMount = BodyCredit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let PayMountRounded = PayMount.toFixed(2);
  console.log(PayMountRounded);
}
calculateTotalMortgage(15, 0, 10000, 36);