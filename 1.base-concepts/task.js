"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discrim = b ** 2 - 4 * a * c;
  if (discrim == 0) {
    arr[0] = -b / (2 * a);
  } else if (discrim > 0) {
    arr[0] = (-b + Math.sqrt(discrim)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discrim)) / (2 * a);
  }
  return arr;
}

solveEquation(1,2,3);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 percent=percent/100;    
 let percentMounth = percent/12;
 let creditBody = amount - contribution;
 let mounthPay = creditBody * (percentMounth + (percentMounth / (((1 + percentMounth) ** countMonths) - 1)));
 let summToPay = (mounthPay * countMonths).toFixed(2);
 summToPay=Number(summToPay);
 console.log(summToPay);
  return summToPay;
}

calculateTotalMortgage(5,5,7,60);