"use strict";
function solveEquation(a, b, c) {
  let arr;
  const d = b**2 - 4*a*c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let x = (-b/(2*a));
    arr = [x];
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2*a);
    let x2 = (-b - Math.sqrt(d)) / (2*a);
    arr = [x1, x2];
  };
  return arr;
};

"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let S = amount - contribution;
  let P = (1/12)*(percent/100);
  let currentDate;
  let n = (date - currentDate) / 12;
  let pay = S * (P + (P / (((1 + P)**n) - 1)));
  totalAmount = (pay*period).toFixed(2);
  console.log(Number(totalAmount));

  if (percent != Number) {
    console.log("Параметр percent содержит неправильное значение ${percent}");
  } else if (contribution != Number) {
    console.log("Параметр contribution содержит неправильное значение ${contribution}");
  } else if (amount != Number) {
    console.log("Параметр amount содержит неправильное значение ${amount}");
  };

  return totalAmount;
}
