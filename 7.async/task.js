class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const isDuplicate = this.alarmCollection.some(alarm => alarm.time === time);
        if (isDuplicate) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }

    removeClock(time) {
        // filter возвращает новый массив без элементов, удовлетворяющих условию
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        
        let hours = now.getHours().toString();
        let minutes = now.getMinutes().toString();

        // Добавляем ведущий ноль, если число меньше 10
        if (hours.length < 2) hours = '0' + hours;
        if (minutes.length < 2) minutes = '0' + minutes;

        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId) {
            return; // Интервал уже запущен, дублирование запрещено
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    try {
                        alarm.callback(); 
                    } catch (error) {
                        console.error('Ошибка при выполнении коллбека будильника:', error);
                    }
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop(); // Сначала останавливаем интервал
        this.alarmCollection = []; // Затем очищаем коллекцию
    }
}