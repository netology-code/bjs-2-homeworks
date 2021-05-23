'use strict';

//Задача 1

function solveEquation(a, b, c) {
   let arr = [];
   let D = Math.pow(b, 2) - 4 * a * c;

   if (D > 0) {
      arr = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
   } else if (D === 0) {
      arr = [-b / (2 * a)];
   }

   return arr; // array
}

//Задача 2

function calculateTotalMortgage(percent, contribution, amount, date) {

   let totalAmount;

   //Корректность поля percent
   if (percent === 0 || percent === '') return "Вы не заполнили поле Процентная ставка";
   if (percent < 0) return "Процентная ставка не может быть отрицательной";
   if (isNaN(percent)) {
      return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}`;
   };

   //Корректность поля contribution
   if (contribution === '') return "Вы не заполнили поле Начальный взнос";
   if (contribution < 0) return "Начальный взнос не может быть отрицательный";
   if (isNaN(contribution)) {
      return `Параметр 'Сумма первоначального взноса' содержит неправильное значение ${contribution}`;
   };

   //Корректность поля amount
   if (amount === 0 || amount === '') return "Вы не заполнили поле Общая стоимость";
   if (amount < 0) return "Общая стоимость не может быть отрицательной";
   if (isNaN(amount)) {
      return `Параметр 'Сумма кредита' содержит неправильное значение ${amount}`;
   };

   contribution = parseFloat(contribution);
   amount = parseFloat(amount);

   if (contribution > amount) {
      return 'Сумма начального взноса не может быть больше общей суммы по кредиту';
   };
   //Корректность поля date
   if (isNaN(date)) {
      return `Параметр 'Дата окончания кредита' содержит неправильное значение ${date}`;
   };

   const dateNow = new Date();
   const dateNowYear = dateNow.getFullYear(); //Текущий год
   const dateNowMonth = dateNow.getMonth(); //Текущий месяц

   const dateYear = date.getFullYear(); //Год выплаты кредита
   const dateMonth = date.getMonth(); //Месяц выплаты кредита


   let differenceYearMonth = (dateYear - dateNowYear) * 12 + (dateMonth - dateNowMonth);

   if (differenceYearMonth === 0) differenceYearMonth = 1; //Если выплата кредита была в том же месяце
   if (differenceYearMonth < 0) return "Срок кредита не может быть отрицательный";

   percent = parseFloat(percent / 100);

   let S = amount - contribution; // тело кредита
   let P = percent / 12; //1/12 процентной ставки
   totalAmount = parseFloat((S * (P + P / ((1 + P) ** differenceYearMonth - 1)) * differenceYearMonth).toFixed(2));
   console.log(+totalAmount);
   
   return +totalAmount;

}