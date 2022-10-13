function solveEquation(a, b, c) {
  'use strict'
  let arr = [];
  
  let d = (b**2) - (4 * a * c);
  
  if(d == 0) {
    arr[0] = -b/(2*a)
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a)
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict'
  let totalAmount;

  if(
    isNaN(Number(percent)) ||
    isNaN(Number(contribution)) ||
    isNaN(Number(amount))
  ) {
    return 'Убедитесь, что вы ввели числа в каждое поле'
  }
  
  const creditBody = amount - contribution;
  const countMonth = Math.floor(((date.getTime() - Date.now()) / 1000) / 2592000);
 
  const pricentState = (percent / 100)/12
  const monthPayment = creditBody * (pricentState + (pricentState / (((1 + pricentState)**countMonth) - 1)))
  // код для задачи №2 писать здесь
  totalAmount = (monthPayment * countMonth).toFixed(2);
  console.log(totalAmount);
  return totalAmount;
}
