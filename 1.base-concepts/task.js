"use strict"

function solveEquation(a,b,c) {
  let discriminant = Math.pow(b,2) -4*a*c;
  let answer = [];
  if (discriminant<0) {
    console.log("корней нет")
  }
  else if(discriminant==0) {
    answer.push(-b/(2*a));
  }
  else {
    answer.push((-b + Math.sqrt(discriminant))/(2*a));
    answer.push((-b - Math.sqrt(discriminant))/(2*a));
  }
  return answer;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  //percent процентную ставку, 
  //contribution сумму первоначального взноса,
  //amount сумму кредита,
  //countMonths срок в месяцах
  // if(typeof percent !="number" || typeof contribution !="number" || typeof amount!="number" || typeof countMonths)
  // {
  //   return false;
  // }
  percent = percent/100;
  let mPercent = percent/12;
  let body = amount - contribution;
  let payment = body * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  // let payment = body * (mPercent + (mPercent / (((1 + mPercent)**countMonths) - 1)));
  console.log(payment.toFixed(2));
}
// Напишите функцию, которая будет принимать процентную ставку, сумму первоначального взноса, сумму кредита и срок (длительность кредита в месяцах) в качестве аргументов и выдавать сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом). 
// 1. Реализуйте функцию `calculateTotalMortgage`, которая принимает четыре аргумента: `percent`, `contribution`, `amount` и `countMonths`.
// 2. Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную.
// 3. Посчитайте тело кредита — сумму, которую нужно вернуть банку (сумма кредита минус первоначальный взнос).
// 4. Ежемесячная оплата рассчитывается по формуле: `Платёж = S * (P + (P / (((1 + P)^n) - 1)))`, где:
// `S` — тело кредита, `P` — 1/12 процентной ставки (от 0 до 1), `n` — количество месяцев, `^` — возведение в степень. Для возведения в степень используйте оператор — `**` или функцию [Math.pow](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).
// 5. Посчитайте общую сумму, которую придётся заплатить клиенту.
// 6. Округлите результат до двух значений после запятой. Результат округления должен быть **числом**.
// 7. Верните результат из функции. Результатом функции должно быть значение числового типа.
