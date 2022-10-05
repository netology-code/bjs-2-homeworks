const alarm1 = new AlarmClock();
alarm1.addclock("09:00", () => console.log("проверка"), 1);
alarm1.addclock("09:00", () => console.log("проверка"), 1);
alarm1.addclock("09:00", () => console.log("проверка2"), 2);
alarm1.addclock("09:00", () => console.log("проверка3"), 3);
alarm1.removeClock(2);
alarm1.getCurrentFormattedTime();
alarm1.addclock("09:00", () => console.log("проверка2"), 2);
alarm1.start();