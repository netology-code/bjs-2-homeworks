"use strict"

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return [];
	} else if (d === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(d)) / (2 * a);
		const root2 = (-b - Math.sqrt(d)) / (2 * a);
		return [root1, root2];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100 / 12; // преобразование процентной ставки
	const loanBody = amount - contribution; // тело кредита
	const monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1))); // ежемесячная оплата
	const totalAmount = monthlyPayment * countMonths; // общая сумма
	const roundingTotalAmount = totalAmount.toFixed(2); // округление до 2 знаков после запятой
	return parseFloat(roundingTotalAmount);
}

const result = calculateTotalMortgage(10, 20000, 20000, 24);
console.log(result);