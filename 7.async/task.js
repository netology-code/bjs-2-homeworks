class AlarmClock {

    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        let flag = true;
        if (id === undefined) {
            throw new Error('id не определен!');
        }
        for (const element of this.alarmCollection) {
            if (element.id === id) {
                flag = false;
                return;
            }
        }
        if (flag) {
            this.alarmCollection.push({ time, callback, id });
        }
    }

    removeClock(id) {
        return this.alarmCollection = this.alarmCollection.filter((element) => element.id != id);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}` + ":" + `${minutes}`;
    }

    start() {
        const checkClock = (element) => {
            if (element.time === this.getCurrentFormattedTime)
                element.callback();
        }
        if (this.timerId === null) {
            this.timerId === setInterval(() => {
                for (const element of this.alarmCollection) {
                    checkClock(element);
                }
            }, 3000)
        }
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

    printAlarms() {
        for (const element of this.alarmCollection) {
            console.log(element.id + ": " + element.time);
        }
    }

}

function testCase() {
    let clock = new AlarmClock();
    clock.addClock("16:50", () => { console.log('Пора вставать!') }, 1);
    clock.addClock("16:51", () => { console.log('Ну же вставай!'); clock.removeClock(2) }, 2);
    clock.addClock("16:52", () => {
        console.log('Ты будушь вставать или нет???!');
        clock.clearAlarms();
        clock.printAlarms()
    }, 3);
    clock.printAlarms();
    clock.start();
}


