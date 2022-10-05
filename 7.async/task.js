class AlarmClock {
  constructor() {
    this.alarmCollections = [];
    this.timerId;
  }
  addclock(time, callback, id) {
    if (id === undefined) {
      throw new Error("Параметр id не задан");
    }
    if (this.alarmCollections.some((item) => item.id === id)) {
      console.error("Будильник с таким id уже существует");
      return;
    }
    this.alarmCollections.push({ id: id, time: time, callback: callback });
  }

  removeClock(id) {
    this.alarmCollections = this.alarmCollections.filter((item) => item.id !== id);
    return this.alarmCollections.some((item) => item.id === id);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  start() {
    debugger;
    function checkClock(alarm) {
       
        const a = getCurrentFormattedTime().call(this);
      if (a  === alarm.time) {
        alarm.callback;
        console.log("проверяем будильник")
      }
    }

    if (this.timerId === undefined) {
      function alarmsCheck() {
        console.log("запускаем будильники")
        this.alarmCollections.forEach((item) => checkClock(item).call(this));
      }
      const asyncFunc = alarmsCheck.bind(this);
      asyncFunc();
    

    }
  }
}
