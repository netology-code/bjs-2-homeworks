'use strict';

function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return []; // Нет корней
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root]; // Один корень
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2]; // Два корня
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
      typeof percent !== 'number' ||
      typeof contribution !== 'number' ||
      typeof amount !== 'number' ||
      typeof countMonths !== 'number'
  ) {
      return 'Все аргументы должны быть числами';
  }

  if (percent < 0 || countMonths <= 0) {
      return 'Процентная ставка должна быть неотрицательной, а срок кредита должен быть положительным';
  }

  const monthlyInterestRate = percent / 100 / 12; // Процентная ставка в месяц
  const loanAmount = amount - contribution; // Тело кредита

  const monthlyPayment = loanAmount * (monthlyInterestRate + monthlyInterestRate / ((1 + monthlyInterestRate) ** countMonths - 1));
  const totalPayment = monthlyPayment * countMonths;

  return parseFloat(totalPayment.toFixed(2)); // Округляем до двух знаков после запятой
}
