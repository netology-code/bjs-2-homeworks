describe("Домашнее задание к занятию 8 «Функции декораторы»", () => {
  describe("Задача №1 Усовершенствованный кэширующий декоратор", () => {
    let add2 = (a, b) => a + b;
    let add3 = (a, b, c) => a + b + c;
    let upgAdd2;
    let upgAdd3;


    beforeEach(function(){
      upgAdd2 = cachingDecoratorNew(add2);
      upgAdd3 = cachingDecoratorNew(add3);
    });

    it("Декоратор кэширует", () => {
      expect(upgAdd2(1, 2)).toEqual("Вычисляем: 3");
      expect(upgAdd2(1, 2)).toEqual("Из кэша: 3");
      expect(upgAdd2(1, 2)).toEqual("Из кэша: 3");
    });

    it("Декоратор кэширует функцию 3х переменных", () => {
      expect(upgAdd3(1, 2, 3)).toEqual("Вычисляем: 6");
      expect(upgAdd3(1, 2, 3)).toEqual("Из кэша: 6");
      expect(upgAdd3(1, 2, 3)).toEqual("Из кэша: 6");
    });

    it("Декоратор кэширует только 5 значений", () => {
      expect(upgAdd3(1, 2, 4)).toEqual("Вычисляем: 7");
      expect(upgAdd3(1, 2, 5)).toEqual("Вычисляем: 8");
      expect(upgAdd3(1, 2, 6)).toEqual("Вычисляем: 9");
      expect(upgAdd3(1, 2, 7)).toEqual("Вычисляем: 10");
      expect(upgAdd3(1, 2, 8)).toEqual("Вычисляем: 11");
      expect(upgAdd3(1, 2, 8)).toEqual("Из кэша: 11");
      expect(upgAdd3(1, 2, 3)).toEqual("Вычисляем: 6");
    });
  });
});
