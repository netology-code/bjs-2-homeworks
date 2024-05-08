describe("Домашнее задание к занятию 2 Функции", () => {
  describe("Задача №1 Исследовать массив", () => {
    it("[-99, 99, 10] => { min: -99, max: 99, avg: 3.33 }", () => {
      expect(getArrayParams(-99, 99, 10)).toEqual({ min: -99, max: 99, avg: 3.33 });
    });
    it("[1, 2, 3, -100, 10] => { min: -100, max: 10, avg: -16.80 }", () => {
      expect(getArrayParams(1, 2, 3, -100, 10)).toEqual({ min: -100, max: 10, avg: -16.80 });
    });
    it("[5] => { min: 5, max: 5, avg: 5 }", () => {
      expect(getArrayParams(5)).toEqual({ min: 5, max: 5, avg: 5.00 });
    });
  });

  describe("Задача №2 Насадки преобразователи", () => {
    describe("Насадка суммирования элементов", () => {
      it("[] => 0", () => {
        expect(summElementsWorker()).toEqual(0);
      });
      it("[10, 10, 11, 20, 10] => 61", () => {
        expect(summElementsWorker(10, 10, 11, 20, 10)).toEqual(61);
      });
      it("0, 0, 0, -1, -100 => -101", () => {
        expect(summElementsWorker(0, 0, 0, -1, -100)).toEqual(-101);
      });
    });

    describe("Насадка вычисления разницы максимального и минимального элементов", () => {
      it("[] => 0", () => {
        expect(differenceMaxMinWorker()).toEqual(0);
      });
      it("[10, 10, 11, 20, 10] => 20 - 10 => 10", () => {
        expect(differenceMaxMinWorker(10, 10, 11, 20, 10)).toEqual(10);
      });
      it("0, 0, 0, -1, -100 => 0 - (-100) => 100", () => {
        expect(differenceMaxMinWorker(0, 0, 0, -1, -100)).toEqual(100);
      });
    });

    describe("Насадка вычисления разницы сумм чётных и нечётных элементов", () => {
      it("[] => 0", () => {
        expect(differenceEvenOddWorker()).toEqual(0);
      });
      it("[1, 2, 3, 4, 5, 6, 7, 8, 9] => 20 - 25 => -5", () => {
        expect(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(-5);
      });
      it("[94, 51, 57, 41, 47, 66, 58, 10, 38, 17] => 266 - 213 => 53", () => {
        expect(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)).toEqual(53);
      });
      it("15, 97, 85, 64, 67, 10, 69, 40, 15, 35 => 114 - 383 => -269", () => {
        expect(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)).toEqual(-269);
      });
    });

    describe("Насадка вычисления среднего значения чётных элементов", () => {
      it("[] => 0", () => {
        expect(averageEvenElementsWorker()).toEqual(0);
      });
      it("[1, 2, 3, 4, 5, 6, 7, 8, 9] => [2, 4, 6, 8] => 5", () => {
        expect(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)).toEqual(5);
      });
      it("[15, 97, 85, 64, 67, 10, 69, 40, 15, 35] => [64, 10, 40] => 38", () => {
        expect(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)).toEqual(38);
      });
    });
  });

  describe("Задача №3 Агрегатор преобразователей", () => {
    it("Насадка суммирования значений", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 61, 206, 328, 284
      expect(makeWork(arr, summElementsWorker)).toEqual(328);
    });
    it("Насадка разницы элементов", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 10, 86, 44, 66
      expect(makeWork(arr, differenceMaxMinWorker)).toEqual(86);
    });
    it("Насадка разницы чётных и нечётных элементов", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 39, -6, -184, 92
      expect(makeWork(arr, differenceEvenOddWorker)).toEqual(92);
    });
    it("Насадка среднего значения чётных элементов", () => {
      const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
      // 12.5, 33.333, 72, 62.666
      expect(makeWork(arr, averageEvenElementsWorker)).toEqual(72);
    });
  });
});
