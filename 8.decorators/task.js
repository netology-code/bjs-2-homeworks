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
    cache.push({ hash, value: result });
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
  wrapper.allCount = 0;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeOutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  return wrapper;
}
