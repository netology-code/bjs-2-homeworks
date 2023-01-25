"use strict";
function solveEquation(a,b,c) {
  const result = [];
  const discriminant = (b**2-4*a*c);
  
  if (discriminant > 0) {
   let root1 = (-b + Math.sqrt(discriminant) )/(2*a);
   let root2 =  (-b - Math.sqrt(discriminant) )/(2*a);
    result.push(root1,root2);
    console.log(result);
    return result;
  }

  if (discriminant === 0){
  let root0 = -b/(2*a);
  result.push(root0);
    console.log(result);
  return result;
}

else {
  console.log("корней нет"+ result)
}

  return result; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}