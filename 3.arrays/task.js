"use strict";

function compareArrays(arr1, arr2) {
  let result;

  if(Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {

    arr1.every((el, i) => {
      result = el === arr2[i];
    });

  } else {
    result = false;
  }


  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  if(Array.isArray(arr)) {
    resultArr = arr.filter(
        num => num > 0
    ).filter(
        num => num % 3 === 0
    ).map(
        num => num * 10
    );

  } else {
    console.log(`arr is not array`);
    return;
  }

  return resultArr; // array
}


/*
*
* попробуйте такую функцию написать: принимает массив чисел и значение суммы,
* а возвращает значение количества чисел, которое необходимо суммировать до получения переданной суммы.
* Если набранной суммы не хватает, то возвращает общее количество элементов.
*
//возвращает 4, т.к. 1+2+3=6 (3 числа), а 1+2+3+5=11 (4 числа)
*
getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10);
*
//возвращает 6, т.к. 1+2+3+5+2=13 (5 чисел), а 1+2+3+5+2+7=20 (6 чисел)
*
getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20);
*
Функция должна сразу возвращать результат. Не должно быть никаких циклов или дополнительных переменных.
*
* */

function getValuesCountToSumValues(arr, sum) {

  if(Array.isArray(arr) && Number.isInteger(sum)) {

    arr.reduce((acc, el) => {
      acc++;
      console.log('el ' + el);
      console.log('acc ' + acc);
    }, 0);

  } else {
    return;
  }
}

console.log('Mine');
console.log(getValuesCountToSumValues([1,2,3,5,2,7,3,5,2], 10));