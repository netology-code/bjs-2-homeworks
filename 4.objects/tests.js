describe("Домашнее задание к занятию 4 «Объекты»", () => {
  describe("Задача №1 Инкапсуляция студента", () => {
    let student1 = new Student("Tony", "male", 37);
    student1.setSubject("Algebra");
    student1.addMark(5);
    student1.addMark(4); 
    student1.addMark(5);
    
    let student2 = new Student("Buzz", "female", 35);
    student2.setSubject("Geometry");
    student2.addMarks(2,3,2);

    it("Установка предмета работает корректно", () => {
      expect(student1.subject).toEqual("Algebra");
      expect(student2.subject).toEqual("Geometry");
    });

    it("Добавление оценок addMark работает корректно", () => {
      expect(student1.marks).toEqual([5, 4, 5]);
    });

    it("Добавление группы оценок addMarks работает корректно", () => {
      expect(student2.marks).toEqual([2, 3, 2]);
    });

    it("Вычисление среднего работает корректно", () => {
      expect(student1.getAverage()).toEqual(14/3);
      expect(student2.getAverage()).toEqual(7/3);
    });

    it("Отчисление студента работает корректно", () => {
      student2.exclude('low grades')
      expect(student2.excluded).toEqual('low grades');
    });

  });
});
