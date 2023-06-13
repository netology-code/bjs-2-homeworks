"use strict"

function solveEquation(a, b, c) {
  let arr;
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    let root = -b / ( 2 * a );
    arr = [];
    arr.push(+root.toFixed(2));
  } else if (discriminant > 0) {
    let root1 = ( -b + Math.sqrt(discriminant) ) / ( 2 * a );
    let root2 = ( -b - Math.sqrt(discriminant) ) / ( 2 * a );
    arr = [];
    arr.push(+root1.toFixed(2), +root2.toFixed(2));
  } else {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  date = +date;
  if (typeof percent === `string`) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (typeof contribution === `string`) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  } else if (typeof amount === `string`) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  } else if (typeof date === `string`) {
    totalAmount = `Параметр "Сроки ипотеки" содержит неправильное значение ${date}`;
  };
  let lianAmount = amount - contribution;
  let timeNow = new Date();
  let loanTerm = date - timeNow;
  loanTerm = loanTerm / 1000 / 60 / 60 / 24 / 30;
  let monthlyPartPercent = (percent / 100) / 12;
  let monthFee = lianAmount * (monthlyPartPercent + (monthlyPartPercent / (((1 + monthlyPartPercent) ** loanTerm) - 1)));
  totalAmount = +(monthFee * loanTerm).toFixed(2);
  console.log(totalAmount);
  return totalAmount;
}
