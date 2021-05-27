function solveEquation(a, b, c) {
  let arr = [];
  let discr = b ** 2 - 4 * a * c;
  let xOne = 0;
  let xTwo = 0;
    if (discr === 0) {
      xOne = (- b + Math.sqrt(discr)) / 2 * a;
      arr.push(xOne)
    } else if (discr > 0) {
      xOne = (- b + Math.sqrt(discr)) / 2 * a;
      arr.push(xOne);
      xTwo = (- b - Math.sqrt(discr)) / 2 * a;
      arr.push(xTwo);
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
