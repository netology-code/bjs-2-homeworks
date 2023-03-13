"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2) - 4*a*c
  if (discr == 0) {
    let ans = -b/(2*a)
    arr.push(ans)
  } else if (discr > 0) {
    let ans1 = (-b + Math.sqrt(discr) )/(2*a)
    let ans2 = (-b - Math.sqrt(discr) )/(2*a)
    arr.push(ans1, ans2)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false
  }
  let monthBid = (percent / 100) / 12
  let cred = amount - contribution
  let monthPayment = cred * (monthBid + (monthBid / (((1 + monthBid)**countMonths) - 1)))
  let payment = monthPayment * countMonths
  if(payment != 0) {
    payment = parseFloat(payment.toFixed(2))
  }
  return payment
}