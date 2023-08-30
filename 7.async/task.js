class AlarmClock {
  constructor () {
      this.alarmCollection = [];
      this.intervalId = null;
  }

  addClock(time, callback) {

      if (time === null || callback === undefined) {
          throw new Error('Отсутствуют обязательные аргументы');
      }

      for (let i = 0; i < this.alarmCollection.length; i += 1) {
    if (time === this.alarmCollection[i].time) {
      console.warn('Уже присутствует звонок на это же время');
    }
  }

  this.alarmCollection.push({
    callback: callback,
    time: time,
    canCall: true,
  });
  }
  
  removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
      let currentHour = new Date().getHours();
  let currentMinute = new Date().getMinutes();
  let currentTime = currentHour + ':' + currentMinute;
  return currentTime;
  }

  start() {
      if (this.intervalId !== null) {
          return;
      }

      const newInterval = setInterval(() => {
          this.alarmCollection.forEach(item => {
                  if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                      item.canCall = false;
                      item.callback();
                  }
              }
          )
      }, 1000);

      this.intervalId = newInterval;
  }

  stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
  }
  
  resetAllCalls() {
      this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms() {
      this.stop();
      this.alarmCollection = [];
  }
}
