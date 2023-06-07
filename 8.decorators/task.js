function cachingDecoratorNew(func) {
    let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); // получаем правильный хэш
      let idx = cache.findIndex((item)=> item.hash === hash ); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент не найден
          console.log("Из кэша: " + cache[idx].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[idx].result;
      }
  
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash, result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }
  
  
  function debounceDecoratorNew(func, ms) {  
    let timerId = null;
    function wrapper (...args){
      if (timerId === null) {
        func(...args);
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => timerId = null, ms);
    }
    return wrapper;
  } 
  
  function debounceDecorator2(func, ms) {
    let timerId = null;
    function wrapper(...args){
      if (timerId === null) {
        func(...args);
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => timerId = null, ms);
      wrapper.count++;
    }
    return wrapper;
  }