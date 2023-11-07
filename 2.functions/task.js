function getArrayParams(...arr) {
  let min = Infinity;  // Устанавливаем начальное значение min на бесконечность
  let max = -Infinity; // Устанавливаем начальное значение max на отрицательную бесконечность
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2); // Вычисляем среднее и округляем до двух знаков после запятой

  return { min, max, avg: parseFloat(avg) }; // Преобразуем среднее обратно в число
}

// Функция для суммирования элементов
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, element) => sum + element, 0);
}

// Функция для вычисления разницы между максимальным и минимальным элементами
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

// Функция для вычисления разницы между суммой четных и нечетных элементов
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (const element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  
  return sumEvenElement - sumOddElement;
}

// Функция для вычисления среднего значения четных элементов
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (const element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }
  
  if (countEvenElement === 0) {
    return 0;
  }
  
  return sumEvenElement / countEvenElement;
}

// Примеры использования
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity; // Инициализируем переменную начальным значением -Infinity

  for (const data of arrOfArr) {
    const result = func(...data); // Передаем каждый массив данных в функцию-насадку и получаем результат
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result; // Обновляем максимальный результат, если текущий результат больше
    }
  }

  return maxWorkerResult; // Возвращаем максимальный результат
}

// Примеры использования с функциями насадками из предыдущей задачи
const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // Максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // Максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // Максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // Максимум из 12.5, 33.333, 72, 62.66 => 72