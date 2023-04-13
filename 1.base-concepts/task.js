"use strict";

function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return [];
    } else if (discriminant == 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let totalAmount = 0;
    const percentPerMonth = parseFloat((percent / 100) / 12);
    const creditAmount = parseFloat(amount - contribution);

    if (isNaN(parseFloat(percent)) || isNaN(parseFloat(contribution)) || isNaN(parseFloat(amount)) || isNaN(parseFloat(countMonths))) {
        return false;
    } else {
        const monthlyPayment = parseFloat(creditAmount * (percentPerMonth + percentPerMonth / (Math.pow(1 + percentPerMonth, countMonths) - 1)));
        totalAmount = parseFloat(monthlyPayment * countMonths);
        totalAmount = parseFloat(totalAmount.toFixed(2));
        return totalAmount;
    }
}
