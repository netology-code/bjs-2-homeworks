"use strict";

function solveEquation(a, b, c) {

  let arr = new Array(),
      x1, x2,
      D = Math.pow(b, 2) - 4 * a * c;

  if(D < 0) {
    return arr;

  } else if (D == 0) {
    x1 = -b/(2*a);
    arr.push(x1);

  } else {
    x1 = (-b + Math.sqrt(D) ) / (2 * a);
    x2 = (-b - Math.sqrt(D) ) / (2 * a);
    arr.push(x1, x2);
  }

  return arr; // array
}

/* *
Напишите функцию, которая будет принимать процентную ставку, сумму первоначального взноса, сумму кредита и
срок (дату окончания кредита) в качестве аргументов и выдавать сумму, которую в итоге заплатит
клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).


Процесс реализации:
Посчитайте тело кредита: сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос).
Посчитайте на какой срок был выдан кредит (в месяцах).
Ежемесячная оплата рассчитывается по формуле: Платеж = S * (P + P / (((1 + P)^n) - 1)), где: S - тело кредита,
P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
Посчитайте общую сумму, которую придется заплатить клиенту.
Округлите результат до двух значений после запятой.
Выведите результат в консоль, а также верните его из функции. Результатом функции должно быть значение числового типа.
* */

function calculateTotalMortgage(percent, contribution, amount, date) {

  const now = new Date;

  let totalAmount = Number(0),
      mortgageBody = Number(0),
      mortgagePeriod = Number(0),
      monthlyPayment = Number(0),
      countedPercent = Number(0)
  ;

  if(isNaN(percent) || percent === '' ) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;

  } else if(isNaN(contribution) || contribution === '') {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;

  } else if(isNaN(amount) || amount === '' || amount === '0') { // Не проходит тест
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  if(date instanceof Date && !isNaN(date)) {
    mortgagePeriod = Number(countMonths(now, date));

  } else {
    return `Параметр "Срок ипотеки" не должен быть пустым"`;
  }

  mortgageBody = amount - contribution;

  countedPercent = percent / 100 / 12;

  monthlyPayment = mortgageBody * (countedPercent + countedPercent / ((Math.pow((1 + countedPercent), mortgagePeriod)) - 1));

  totalAmount = (monthlyPayment * mortgagePeriod).toFixed(2);

  totalAmount = parseFloat(totalAmount);

  console.log('Общий платёж: ' + typeof totalAmount);

  return totalAmount;
}

// Count the mortgage period in Months
function countMonths(from, till) {

  let months = (till.getFullYear() - from.getFullYear()) * 12;
  months -= from.getMonth();
  months += till.getMonth();

  return months <= 0 ? 0 : months;
}
