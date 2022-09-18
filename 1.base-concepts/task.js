<<<<<<< HEAD

function solveEquation(a, b, c) {
    "use strict";
    let arr;
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        arr = [];
    } else if (discriminant === 0) {
        arr = [-b / 2 * a];
    } else if (discriminant > 0) {
        arr = [(-b + Math.sqrt(discriminant)) / (2 * a),
        (-b - Math.sqrt(discriminant)) / (2 * a)];
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    if (percent === "" || percent === " " || isNaN(Number(percent))) {
        console.log(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    }
    if (contribution === "" || contribution === " " || isNaN(Number(contribution))) {
        console.log(`Параметр "Начальный взномс" содержит неправильное значение "${contribution}"`);
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    }
    if (amount === "" || amount === " " || isNaN(Number(amount))) {
        console.log(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }
    if (isNaN(date)) {
        console.log(`Параметр "Дата" содержит неправильное значение "${date}"`);
        return;
    }
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
    date = Number(date);
    const today = new Date();
    let bodyCredit = amount - contribution;
    let periodMonthCredit = Math.floor((date - today) / (1000 * 60 * 60 * 24 * 30));
    let ratePerMonth = percent / (100 * 12);
    let monthPayment = bodyCredit * (ratePerMonth + (ratePerMonth / (Math.pow(1 + ratePerMonth, periodMonthCredit) - 1)));
    let totalAmount = monthPayment * periodMonthCredit;
    console.log(Math.round(totalAmount * 100) / 100);
    return Math.round(totalAmount * 100) / 100;
=======
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
>>>>>>> 0b4274c9d9863bbf092c9bc6703e15677a4ab48f
}
