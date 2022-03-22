"use strict"
function solveEquation(a, b, c) {
  let root = [];  
  let noRoot = 'Корней нет';
  let d = b**2-4*a*c;
    if (d === 0) {
        let rootForZero = -b/(2*a);
        root.push(rootForZero);        
    }
    else if (d>0){
        let rootOne = (-b + Math.sqrt(d) )/(2*a);
        let rootTwo = (-b - Math.sqrt(d) )/(2*a);
        root.push(rootOne);    
        root.push(rootTwo);    
    }
    else {
      return root;
    }
  return root;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let timeInMonths = 0;
  let today = new Date;
  let yearsFromNow = date.getFullYear() - today.getFullYear();
  if (yearsFromNow >= 1){
    timeInMonths = 12 * yearsFromNow;
  } else {
    return timeInMonths;
  }
  let monthsFromNow = date.getMonth() - today.getMonth();
  timeInMonths = timeInMonths + monthsFromNow;
  let percentMonthly = percent/100/12; 
  let amountToReturn = amount - contribution;
  //S * (P + (P / (((1 + P)^n) - 1))), где: S - тело кредита,
  //P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
  let paymentMonthly = amountToReturn * (percentMonthly + (percentMonthly / (((1 + percentMonthly)**timeInMonths)-1)))
  totalAmount = paymentMonthly * timeInMonths;
  console.log(totalAmount.toFixed(2))

  return totalAmount.toFixed(2);
}
