class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push({ callback, time, canCall: true });
    }
    
    removeClock(time) {
        console.log(this.alarmCollection)
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
        console.log(this.alarmCollection)
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((element) => {
                if (this.getCurrentFormattedTime() === element.time) {
                    element.canCall = false;
                    element.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((element) => {
            element.canCall = true;
        })
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}
