describe('Домашнее задание к занятию 1. «Основные понятия»', () => {
  describe('Задача №1', () => {
    it('должна возвращать 2 корня уравнения', () => {
      expect(solveEquation(1, 5, 4)).toEqual([-1, -4]);
    });
  
    it('должна возвращать 1 корень уравнения', () => {
      expect(solveEquation(1, 2, 1)).toEqual([-1]);
    });

    it('должна вернуть пустой массив', () => {
      expect(solveEquation(1, 2, 10)).toEqual([]);
    });
  });
  
    describe('Задача №2. Функция должна:', () => {
    it('верно считать кредит: кейс #1', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      expect(calculateTotalMortgage(10, 0, 50000, nextYearDate)).toEqual(52749.53);
    });

    it('верно считать кредит: кейс #2', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      expect(calculateTotalMortgage(10, 1000, 50000, nextYearDate)).toEqual(51694.54);
    });

    it('верно считать кредит: кейс #3', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 4));
      expect(calculateTotalMortgage(10, 20000, 20000, nextYearDate)).toEqual(0);
    });

    it('верно считать кредит: кейс #4', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      expect(calculateTotalMortgage(10, 0, 10000, nextYearDate)).toEqual(11616.19);
    });

    it('верно считать кредит: кейс #5', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      expect(calculateTotalMortgage(15, 0, 10000, nextYearDate)).toEqual(12479.52);
    });

    it('верно считать кредит: кейс #6', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      expect(calculateTotalMortgage(15, 15000, 10000, nextYearDate)).toEqual(0);
    });

    it('выдавать ошибку: указана прошедшая дата', () => {
      const lastYearDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
      expect(calculateTotalMortgage(15, 0, 10000, lastYearDate)).toEqual(`Параметр "Срок ипотеки" содержит неправильное значение ${ lastYearDate.toLocaleString() }`);
    });

    it('выдавать ошибку: введён отрицательный процент', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      const badPercent = -15;
      expect(calculateTotalMortgage(-15, 0, 10000, nextYearDate)).toEqual(`Параметр "Процентная ставка" содержит неправильное значение ${badPercent}`);
    });

    it('выдавать ошибку: введён невалидный процент', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      const badPercent = 'hello world'
      expect(calculateTotalMortgage(badPercent, 0, 10000, nextYearDate)).toEqual(`Параметр "Процентная ставка" содержит неправильное значение ${badPercent}`);
    });

    it('выдавать ошибку: введён отрицательный первоначальный взнос', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      const badContribution = -1
      expect(calculateTotalMortgage(15, badContribution, 10000, nextYearDate)).toEqual(`Параметр "Первоначальный взнос" содержит неправильное значение ${badContribution}`);
    });

    it('выдавать ошибку: введён невалидный первоначальный взнос', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      const badContribution = { contribution: 100 };
      expect(calculateTotalMortgage(15, badContribution, 10000, nextYearDate)).toEqual(`Параметр "Первоначальный взнос" содержит неправильное значение ${badContribution}`);
    });

    it('выдавать ошибку: введена невалидная общая стоимость', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      const badAmount = 'very much';
      expect(calculateTotalMortgage(15, 0, badAmount, nextYearDate)).toEqual(`Параметр "Общая стоимость" содержит неправильное значение ${badAmount}`);
    });

    it('выдавать ошибку: введена отрицательная общая стоимость', () => {
      const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
      const badAmount = -10000;
      expect(calculateTotalMortgage(15, 0, badAmount, nextYearDate)).toEqual(`Параметр "Общая стоимость" содержит неправильное значение ${badAmount}`);
    });
  });
});