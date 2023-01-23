"use strict";
function solveEquation(a,b,c) {
  let arr=[];
  let d = (b**2-4*a*c);

  if (d>0){
   let root1 = (-b + Math.sqrt(d) )/(2*a);
   let root2 =  (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1,root2);
    console.log(arr);
    return arr;
  }

if (d === 0){
  let root0= -b/(2*a);
  arr.push(root0);
    console.log(arr);
  return arr;
}

else {
  console.log("корней нет"+ arr)
}

  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}