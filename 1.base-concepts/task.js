"use strict";
console.log(calculateTotalMortgage(10, 1000, 50000, 12))

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d === 0) {
        arr.push(-b / (2 * a));
    }
    if (d > 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        arr.push((-b - Math.sqrt(d)) / (2 * a));
    }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let p = percent / 1200;
    let s = amount - contribution;
    let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
    let sumPayment = payment * countMonths;
    if (!Number.isInteger(sumPayment)) {
        sumPayment = +sumPayment.toFixed(2);
    }
    return sumPayment;
}