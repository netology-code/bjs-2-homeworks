/* Задача №1 */
function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
      const hash = (JSON.stringify(args)); // вычисляем хеш аргументов
      let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент в кеше по хешу
  
      if (objectInCache) { // если элемент найден в кеше
        console.log("Из кэша: " + objectInCache.value);
        return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args); // вызываем функцию и получаем результат
      cache.push({ hash, value: result }); // добавляем новый элемент в кеш
  
      if (cache.length > 5) { // если количество элементов в кеше больше пяти
        cache.shift(); // удаляем первый элемент из кеша
      }
  
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  
    return wrapper;
  }
  
  const addAndMultiply = (a, b, c) => (a + b) * c;
  const upgraded = cachingDecoratorNew(addAndMultiply);
  console.log(upgraded(1, 2, 3)); // вычисляем: 9
  console.log(upgraded(1, 2, 3)); // из кэша: 9
  console.log(upgraded(2, 2, 3)); // вычисляем: 12
  console.log(upgraded(3, 2, 3)); // вычисляем: 15
  console.log(upgraded(4, 2, 3)); // вычисляем: 18
  console.log(upgraded(5, 2, 3)); // вычисляем: 21
  console.log(upgraded(6, 2, 3)); // вычисляем: 18 (при этом кеш для 1, 2, 3 уничтожается)
  console.log(upgraded(1, 2, 3)); // вычисляем: 9 (снова вычисляем, кеша нет)


  /* Задача №2 */
  function debounceDecoratorNew(func, timeout) {
    let timeoutId;
    let count = 0;
    let allCount = 0;
  
    function wrapper(...args) {
      clearTimeout(timeoutId);
  
      const shouldCallImmediately = !timeoutId;
  
      timeoutId = setTimeout(() => {
        timeoutId = null;
        if (!shouldCallImmediately) {
          func(...args);
        }
      }, timeout);
  
      if (shouldCallImmediately) {
        count++;
        func(...args);
      }
  
      allCount++;
    }
  
    Object.defineProperty(wrapper, 'count', {
      get() {
        return count;
      }
    });
  
    Object.defineProperty(wrapper, 'allCount', {
      get() {
        return allCount;
      }
    });
  
    return wrapper;
  }
  
  const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
  const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
  
  setTimeout(() => upgradedSendSignal(1, 0));
  setTimeout(() => upgradedSendSignal(2, 300));
  setTimeout(() => upgradedSendSignal(3, 900));
  setTimeout(() => upgradedSendSignal(4, 1200));
  setTimeout(() => upgradedSendSignal(5, 2300));
  setTimeout(() => upgradedSendSignal(6, 4400));
  setTimeout(() => upgradedSendSignal(7, 4500));
  
  setTimeout(() => {
    console.log(upgradedSendSignal.count);
    console.log(upgradedSendSignal.allCount);
  }, 7000);
