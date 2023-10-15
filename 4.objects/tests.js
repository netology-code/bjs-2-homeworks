describe("Домашнее задание к занятию 4 «Объекты»", () => {
  it("Сохранение базовых свойств", () => {
    let student = new Student("Василиса", "женский", 19);
    expect(student.name).toEqual("Василиса");
    expect(student.gender).toEqual("женский");
    expect(student.age).toEqual(19);
    expect(student.marks).toEqual([]);
  });

  it("Установка предмета работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);

    student.setSubject("Algebra");
    expect(student.subject).toEqual("Algebra");
    
    student.setSubject("Geometry");
    expect(student.subject).toEqual("Geometry");
  });

  it("Добавление группы оценок addMarks работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);
    
    expect(student.marks).toEqual([]);

    student.addMarks(5);
    expect(student.marks).toEqual([5]);

    student.addMarks(4, 4);
    expect(student.marks).toEqual([5, 4, 4]);

    student.addMarks(3, 3, 4, 5);
    expect(student.marks).toEqual([5, 4, 4, 3, 3, 4, 5]);
  });

  it("Вычисление среднего работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);

    expect(student.getAverage()).toEqual(0);

    student.addMarks(5, 5, 5);
    expect(student.getAverage()).toEqual(5);

    student.marks = [3, 4, 5];
    expect(student.getAverage()).toEqual(4);
  });

  it("Отчисление студента работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);

    student.exclude('прогулы');
    expect(student.excluded).toEqual('прогулы');

    expect(student.subject).toBeUndefined();
    expect(student.marks).toBeUndefined();
  });

  it("Невозможность добавлять оценки отчисленному студенту", () => {
    let student = new Student("Василиса", "женский", 19);

    student.exclude('прогулы');
    expect(student.excluded).toEqual('прогулы');

    student.addMarks(5, 5, 5);
    expect(student.marks).toBeUndefined();
    expect(student.getAverage()).toEqual(0);
  });

});
