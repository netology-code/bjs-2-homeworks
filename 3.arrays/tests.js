describe("Домашнее задание к занятию 3 «Массивы»", () => {
  describe("Задача №1 Сравнить массивы", () => {
    it("[1,2,3] === [1,2,3]  true", () => {
      expect(compareArrays([1, 2, 3], [1, 2, 3])).toEqual(true)
    })

    it("[1, 2], [1, 2, 3] false", () => {
      expect(compareArrays([1, 2], [1, 2, 3])).toEqual(false)
    })

    it("[1, 2, 3] === [3, 2, 1] false", () => {
      expect(compareArrays([1, 2, 3], [3, 2, 1])).toEqual(false)
    })

    it("[0, 1, 2] === [0, 1] false", () => {
      expect(compareArrays([0, 1, 2], [0, 1])).toEqual(false)
    })

    it("[0, 1] === [0, 1, 2] false", () => {
      expect(compareArrays([0, 1], [0, 1, 2])).toEqual(false)
    })
    it("[8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5] false", () => {
      expect(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])).toEqual(false)
    })
  })
  describe("Задача №2 Фильтрация и преобразование массива", () => {
    it("[-1, 6, -9, 3] => [60,30]", () => {
      expect(advancedFilter([-1, 6, -9, 3])).toEqual([60, 30])
    })
    it("[-10, -21, 12, 123] => [120, 1230]  true", () => {
      expect(advancedFilter([-10, -21, 12, 123])).toEqual([120, 1230])
    })
    it("[-1, -2] => []  true", () => {
      expect(advancedFilter([-1, -2])).toEqual([])
    })
    it("[4,3,5] => [30]  true", () => {
      expect(advancedFilter([4, 3, 5])).toEqual([30])
    })
  })
})
