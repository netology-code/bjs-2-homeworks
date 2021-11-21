describe("Домашнее задание к занятию 2 Функции", () => {
  describe("Задача №1 Исследовать массив", () => {
    it("[-99, 99, 10] => { min: -99, max: 99, avg: `3.33` }", () => {
      expect(getArrayParams([-99, 99, 10])).toEqual({ min: -99, max: 99, avg: 3.33 });
    })
    it("[1, 2, 3, -100, 10] => { min: -100, max: 10, avg: `-16.80` }", () => {
      expect(getArrayParams([1, 2, 3, -100, 10])).toEqual({ min: -100, max: 10, avg: -16.80 });
    })
    it("[5] => { min: 5, max: 5, avg: `5.00` }", () => {
      expect(getArrayParams([5])).toEqual({ min: 5, max: 5, avg: 5.00 });
    })
  })
  describe("Задача №2 Максимум от суммы", () => {
    it("[[1, 2, 3], [4, 5, 6]] => 15", () => {
      expect(makeWork([[1, 2, 3],[4, 5, 6]],worker)).toEqual(15);
    })
    it("[[10, 10, 11], [20, 10]] => 31", () => {
      expect(makeWork([[10, 10, 11], [20, 10]], worker)).toEqual(31);
    })
    it("[[0, 0, 0], [-1, -100]] => 0", () => {
      expect(makeWork([[0, 0, 0], [-1, -100]], worker)).toEqual(0);
    })

  })
  describe("Задача №3 Другая насадка", () => {
    it("[[10, 20, 30], [-40, -50, -65]] => 25", () => {
      expect(makeWork([[10, 20, 30], [-40, -50, -65]], worker2)).toEqual(25);
    })
    it("[[10, 10, 11], [20, 10]] => 10", () => {
      expect(makeWork([[10, 10, 11], [20, 10]], worker2)).toEqual(10);
    })
    it("[[0, 1, 2], [-1, -100]] => 99", () => {
      expect(makeWork([[0, 1, 2], [-1, -100]], worker2)).toEqual(99);
    })

  })
})
