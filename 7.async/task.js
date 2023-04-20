class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some((alarm) => alarm.time === time)) {
      console.warn('Уже присутствует звонок с таким id');
    }
    this.alarmCollection.push({ time, callback, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      console.log('Текущее время:', this.getCurrentFormattedTime());
      this.alarmCollection.forEach((alarm) => {
        console.log('Звонок', alarm.id, 'должен сработать в', alarm.time, 'canCall:', alarm.canCall);
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
    console.log('Сброс флагов для всех звонков:', this.alarmCollection);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
