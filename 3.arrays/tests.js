describe("Домашнее задание к занятию 3 «Массивы»", () => {
  describe("Задача №1 Сравнить массивы", () => {
    it("[1,2,3] === [1,2,3]  true", () => {
      expect(compareArrays([1, 2, 3], [1, 2, 3])).toEqual(true);
    });

    it("[1, 2], [1, 2, 3] false", () => {
      expect(compareArrays([1, 2], [1, 2, 3])).toEqual(false);
    });

    it("[1, 2, 3] === [3, 2, 1] false", () => {
      expect(compareArrays([1, 2, 3], [3, 2, 1])).toEqual(false);
    });

    it("[0, 1, 2] === [0, 1] false", () => {
      expect(compareArrays([0, 1, 2], [0, 1])).toEqual(false);
    });

    it("[0, 1] === [0, 1, 2] false", () => {
      expect(compareArrays([0, 1], [0, 1, 2])).toEqual(false);
    });
    it("[8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5] false", () => {
      expect(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])).toEqual(false);
    });
  });

  describe("Задача №2 Получение среднего возраста пользователей одного пола", () => {
    const people = [
      {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
      {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
      {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
      {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
      {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
      {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
      {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
      {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
      {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
      {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
      {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
      {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
      {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
      {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
    ];

    it("Средний возраст мужчин", () => {
      expect(getUsersNamesInAgeRange(people, "мужской")).toEqual(32);
    });
    it("Средний возраст женщин", () => {
      expect(getUsersNamesInAgeRange(people, "женский")).toEqual(27.4);
    });

    it("Средний возраст мужской пустого массива должен быть равен нулю", () => {
      expect(getUsersNamesInAgeRange([], "мужской")).toEqual(0);
    });

    it("Средний возраст несуществующего пола должен быть равен нулю", () => {
      expect(getUsersNamesInAgeRange(people, "инопланетянин")).toEqual(0);
    });
  });
});
