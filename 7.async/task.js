class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error("Параметр id не задан");
    }
    if (this.alarmCollection.some((item) => item.id === id)) {
      console.error("Будильник с таким id уже существует");
      return;
    }
    this.alarmCollection.push({ id: id, time: time, callback: callback });
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
    console.log(`Будильник № ${id} удален`);
    return this.alarmCollection.some((item) => item.id === id);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {
    console.log("Запуск таймера");
    const time = this.getCurrentFormattedTime.bind(this);

    function checkClock(alarm) {
      if (time() === alarm.time) {
        console.log("Запускаем будильник");
        alarm.callback();
      }
    }

    if (this.timerId) {
      return;
    }

    function alarmsCheck() {
      console.log("Проверяем будильники");
      this.alarmCollection.forEach((item) => checkClock(item));
    }

    const func = alarmsCheck.bind(this);
    this.timerId = setInterval(func, 5000);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log("Таймер останвлен");
    }
  }

  printAlarms() {
    console.log("Cписок активных будильников");
    this.alarmCollection.forEach((item) => {
      console.log(`Будильник № ${item.id} заведен на ${item.time}`);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
    console.log("Все будильники удалены");
  }
}

function testCase() {
  const alarmToday = new AlarmClock();
  const now = new Date().toLocaleTimeString().slice(0, -3);
  const now2 = new Date();
  const now3 = new Date();
  const nowPlusOneMinute = new Date(now2.setMinutes(now2.getMinutes() + 1))
    .toLocaleTimeString()
    .slice(0, -3);
  const nowPlusTwoMinutes = new Date(now3.setMinutes(now3.getMinutes() + 2))
    .toLocaleTimeString()
    .slice(0, -3);

  alarmToday.addClock(now, () => console.log(`звонок1 ${now}`), 1);
  alarmToday.addClock(
    nowPlusOneMinute,
    () => console.log(`звонок2 ${nowPlusOneMinute}`),
    2
  );
  alarmToday.addClock(
    nowPlusTwoMinutes,
    () => console.log(`звонок3 ${nowPlusTwoMinutes}`),
    3
  );
  console.log("Текущее время " + alarmToday.getCurrentFormattedTime());
  alarmToday.printAlarms();
  alarmToday.start();
  setTimeout(() => alarmToday.removeClock(1), 20000);
  setTimeout(() => alarmToday.printAlarms(), 20000);
  setTimeout(() => {
    console.log("Текущее время " + alarmToday.getCurrentFormattedTime());
  }, 20000);
  setTimeout(() => alarmToday.clearAlarms(), 90000);
  setTimeout(() => alarmToday.printAlarms(), 90000);
}
