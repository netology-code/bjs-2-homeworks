function solveEquation(a, b, c) {
    'use strict'; // Активируем строгий режим

    // Вычисляем дискриминант
    const d = b * b - 4 * a * c;

    if (d > 0) {
        // Два различных корня
        return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
    } else if (d == 0) {
        // Один корень
        return [-b / (2 * a)];
    } else {
        // Нет корней
        return [];
    }
}
