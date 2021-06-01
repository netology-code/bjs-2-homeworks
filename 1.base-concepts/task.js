function solveEquation(a, b, c) {
  const discriminant = b**2 - 4 * a * c;
  if (discriminant > 0){
      return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
      return [- b / (2 * a)];
  }
  return [];
}

function calculateTotalMortgage(percent, contribution, amount, date) {
if (isNaN(percent)) {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
} else if (isNaN(contribution)) {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
} else if (isNaN(amount)) {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
}
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const yearsBetweenYears = date.getFullYear() - currentYear;
const amountMonth = yearsBetweenYears * 12 - currentMonth + date.getMonth();
const interestRate = (percent / 100) / 12;
const loanBody = amount - contribution;
const monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** amountMonth) - 1)))
const totalAmount = (monthlyPayment * amountMonth).toFixed(2);

console.log(Number(totalAmount));

return Number(totalAmount);
}
