function cachingDecoratorNew(func) {
  let cache = {};

  function wrapper(...args) {
      const hash = args.join(',');

      if (hash in cache) {
          console.log("Из кеша: " + cache[hash]);
          return "Из кеша: " + cache[hash];
      } else {
          let result = func(...args);
          cache[hash] = result;
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result;
      }
  }

  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
