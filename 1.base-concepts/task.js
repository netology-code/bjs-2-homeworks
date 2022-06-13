"use strict";

function solveEquation(a, b, c) {

  let arr=[];
  let x1, x2;
  if (a === 0) {throw new Error("ошибка")}
  

  let d = b**2 - 4 * a * c;
  
 
 if (d === 0) {
  x1 = -b / (2 * a);
 arr.push(x1);

  } else if(d>0){
    x1=(-b + Math.sqrt(d)) / (2 * a);
    x2=(-b - Math.sqrt(d)) / (2 * a);
    
   arr.push(x1, x2);
  }
  return arr;
}
 


function calculateTotalMortgage(percent, contribution, amount, date) {
  
  if(typeof percent !== 'number'){return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`}
  if(typeof contribution !== 'number'){return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`}
  if(typeof amount !== 'number'){return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`}

    let totalAmount;
    let S = amount - contribution;
    
    let nowDate=new Date();
      let year1 =nowDate.getFullYear();
      let year2 = date.getFullYear();
      let month1 = nowDate.getMonth();
      let month2 = date.getMonth();
     if(month1 === 0){
        month1++;
        month2++;
      }
    let n = (year2 - year1) * 12 + (month2 - month1);

    let P=percent/12/100;
    
    let amountPerMonth = S * (P + (P / (((1 + P)**n) - 1)));

    totalAmount=(amountPerMonth * n);
    totalAmount=Number(totalAmount.toFixed(2));
  return totalAmount;
}
 

//+ Активируйте строгий режим соответствия.
//Проконтролируйте корректность введенных данных.
//+ Посчитайте тело кредита: сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос).
//+Посчитайте на какой срок был выдан кредит (в месяцах).
//*Ежемесячная оплата рассчитывается по формуле: Платеж = S * (P + (P / (((1 + P)^n) - 1))), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
//Посчитайте общую сумму, которую придется заплатить клиенту.
//Округлите результат до двух значений после запятой.
//Выведите результат в консоль, а также верните его из функции. Результатом функции должно быть значение числового типа.
// код для задачи №2 писать здесь

    //S - тело кредита, 
    //P - 1/12 процентной ставки (от 0 до 1), 
    //n - количество месяцев ^ - возведение в степень
 
  
    //percent- прцентная ставка
    //contribution- первоначальный взнос
    // amount общая стоимость - сумма кредита
    // date срок ипотеки
    //totalAmount - итого
