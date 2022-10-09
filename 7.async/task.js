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
    const length = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
    if (length - this.alarmCollection.length) {
      console.log(`Будильник № ${id} удален`);
      return true;
    }
    return false;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {

    if (this.timerId) {
      return;
    }

    console.log("Запуск таймера");

    let checkClock = (alarm) => {
      const time = this.getCurrentFormattedTime();
      if (time === alarm.time) {
        console.log("Запускаем будильник");
        alarm.callback();
      }
    };

    let alarmsCheck = () => {
      console.log("Проверяем будильники");
      this.alarmCollection.forEach((item) => checkClock(item));
    };

    this.timerId = setInterval(alarmsCheck, 4000);
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
  let now = new Date();
  const nowPlusOneMinute = new Date(new Date().setMinutes(now.getMinutes() + 1))
    .toLocaleTimeString()
    .slice(0, -3);
  const nowPlusTwoMinutes = new Date(new Date().setMinutes(now.getMinutes() + 2))
    .toLocaleTimeString()
    .slice(0, -3);
  now = now.toLocaleTimeString().slice(0, -3);

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
  setTimeout(() => alarmToday.removeClock(1), 19000);
  setTimeout(() => alarmToday.printAlarms(), 19001);
  setTimeout(() => {
    console.log("Текущее время " + alarmToday.getCurrentFormattedTime());
  }, 20000);
  setTimeout(() => alarmToday.clearAlarms(), 50001);
  setTimeout(() => alarmToday.printAlarms(), 50002);
}
