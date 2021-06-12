function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    const valueInCache = cache.find((item) => item.hash === hash);
    if (valueInCache) {
      console.log("Из кэша: " + valueInCache.result);
      return "Из кэша: " + valueInCache.result;
    }
    let result = func(...args);
    if (cache.length >= 5) {
      cache.shift();
    }
    cache.push({ hash, result });
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timerID;
  let flag = false;
  return function () {
    if (!flag) {
      clearTimeout(timerID);
      func();
      flag = true;
      timerID = setTimeout(() => (flag = false), ms);
    } else {
      return;
    }
  };
}

function debounceDecorator2(func, ms) {
  let timerID;
  let flag = false;
  wrapper.count = 0;
  function wrapper() {
    if (!flag) {
      ++wrapper.count;
      clearTimeout(timerID);
      func();
      flag = true;
      timerID = setTimeout(() => (flag = false), ms);
    } else {
      return;
    }
  }
  return wrapper;
}
