function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    const object = cache.find((item) => item.hash === hash);

    if (object) {
      console.log("Из кэша: " + object.value);
      return "Из кэша: " + object.value;
    }
    let result = func(...args);
    cache.push({ hash: hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeOutId = null;
  let allCount = 0;
  let count = 0;

  function wrapper(...args) {
    allCount++;
    wrapper.allCount = allCount;
    if (timeOutId) {
      console.log("Таймер уже был запущен");
      clearTimeout(timeOutId);
      console.log("Сбросили таймер");
    }

    console.log("Запускаем таймер");
    const funcAsync = function () {
      console.log("Запускаем колбэк");
      count++;
      wrapper.count = count;
      func(...args);
    };
    timeOutId = setTimeout(funcAsync, delay);
  }

  return wrapper;
}
