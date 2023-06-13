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
		if (isNaN(percent)) {
		return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	} else if (isNaN(contribution)) {
		return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	} else if (isNaN(amount)) {
		return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	} 	
	let returnAmountBank = amount - contribution;	
	let date1 = new Date();	
	let diff = Date.parse(date) - Date.parse(date1);
	let creditTerm = Math.ceil(diff / 1000 / 60 / 60 / 24 / 30.5);	
	let P = percent / 12 / 100;
	let monthlyFee = returnAmountBank * (P + (P / (((1 + P) ** creditTerm) - 1)));
			totalAmount = creditTerm * monthlyFee;				
    return Number(totalAmount.toFixed(2));	
}
