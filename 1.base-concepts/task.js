"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b ** 2 - 4 * a * c;
	let rad = 0;
	if (discr === 0) {
		rad = -b / (2 * a);
		arr.push(rad);
	} else if (discr > 0) {
		rad = (-b + Math.sqrt(discr) )/(2*a);
		arr.push(rad);
		rad = (-b - Math.sqrt(discr) )/(2*a);
		arr.push(rad);
	}
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthsPercent = percent / 100 / 12;
	let body = amount - contribution;
	let P = monthsPercent;
	let monthsPaymant = body * (P + (P / (((1 + P) ** countMonths) - 1)));
	let totalSum = (monthsPaymant * countMonths).toFixed(2);
	return Number(totalSum);
}