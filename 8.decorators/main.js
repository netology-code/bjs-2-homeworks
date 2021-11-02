const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3); 

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (600 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с