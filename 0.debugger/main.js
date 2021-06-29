function main() {
    console.log('Внутри функции main');
    a();
    a();
    a();
    d();
    e();
}

function a() {
    console.log('Внутри функции a');
    b();
}

function b() {
    console.log('Внутри функции b');
    c();
}

function c() {
    console.log('Внутри функции c');
    let num = Math.random();
    console.log('Случайное число: ' + num);
    if (num > 0.5) {
        console.log('num больше 1/2');
    } else {
        console.log('num меньше 1/2');
    }
}


function d() {
    console.log('Внутри функции c');
    setTimeout(() => {
        console.log('Внутри setTimeout');
    }, 1000);
}

function e() {
    throw new Error('Неизвестная ошибка');
}

main();