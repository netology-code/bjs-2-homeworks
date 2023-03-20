"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D=(b*b)-(4*a*c);
  if (D < 0) {
    arr=[];
    alert("должна вернуть пустой массив");
    } else if (D === 0) {
      arr=[-b/(2*a)];
      alert("должна возвращать 1 корень уравнения")
    } else {
      arr=[(-b + Math.sqrt(D) )/(2*a),(-b - Math.sqrt(D) )/(2*a)];
      alert("должна возвращать 2 корня уравнения");
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
    const P = percent / 100 / 12;
    const bodyCredit = amount - contribution;
    const monthly = bodyCredit * (P + (P / (((1 + P) ** countMonths) - 1)));
    const totalSum = parseFloat((monthly * countMonths).toFixed(2));
    return totalSum;
}
return false;

}