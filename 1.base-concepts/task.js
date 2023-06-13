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

function calculateTotalMortgage(percent, contribution, amount, countMonths) //процент (в диапазоне от 0 до 100), начальный взнос, сумма кредита, срок в месяцах 
{
	const P = percent / 100 / 12;
	const S = amount - contribution;
	const n = countMonths;
	const monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
	const totalAmount = (monthlyPayment * n).toFixed(2);
	let num = Number(totalAmount);
	return num;
}
calculateTotalMortgage(10, 0, 50000, 12)
