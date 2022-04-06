"use strict";
function solveEquation(a, b, c) {
  let arr;
  const discriminant = b**2 - 4*a*c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    let root = (-b/(2*a));
    arr = [root];
  } else if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
    arr = [root1, root2];
  };
  return arr;
};

"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let S = amount - contribution;
  let P = percent/100/12;
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let n = (date.getFullYear() - currentYear)*12 + (date.getMonth() - currentMonth);
  let pay = S * (P + (P / (((1 + P)**n) - 1)));
  totalAmount = (pay*n).toFixed(2);
  console.log(Number(totalAmount));

  if (isNaN(percent)) {
    console.log("Параметр percent содержит неправильное значение ${percent}");
  } else if (isNaN(contribution)) {
    console.log("Параметр contribution содержит неправильное значение ${contribution}");
  } else if (isNaN(amount)) {
    console.log("Параметр amount содержит неправильное значение ${amount}");
  };

  return totalAmount;
}
