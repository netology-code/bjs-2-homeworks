function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);
  if (d < 0) {
    return arr;
  } 
  
  else if (d == 0) {
    arr[0] = (-b) / (2 * a);
    return arr;
  } 

  else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    return arr;
  }

}


function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let totalAmount, monthCredit, n, S, P, fromData, beforeData;

  if (isNaN(percent)){
  return (`Ошибка в "Процентная ставка " "${percent}"`)
  }

  if (isNaN(contribution)){
  return (`Ошибка в "Начальный взнос " "${contribution}"`)
  }

  if (isNaN(amount)){
  return (`Ошибка в "Сумма кредита " "${amount}"`)
  }

  S = amount - contribution;

  P = percent/12/100;

  fromData = new Date();

  beforeData = new Date(new Date(date));

  n = (beforeData.getFullYear() - fromData.getFullYear())*12 + (beforeData.getMonth() - fromData.getMonth())

  monthCredit = S * (P + P / (((1 + P)**n) - 1));

  totalAmount = Number((monthCredit*n).toFixed(2));
  
  return totalAmount;

}
