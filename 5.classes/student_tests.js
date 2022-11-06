describe('Домашнее задание к лекции 5 «Классы». Дополнительное задание', () => {
  describe('Задача №3', () => {
    let student;
  
    beforeEach(function(){
      student = new Student("Иван Петров");
    });

    it('создание объекта Student', () => {
      expect(student).toBeDefined();
      expect(student.name).toEqual("Иван Петров");
      expect(student.marks).toEqual({});
    });

    it('добавление оценок по разным предметам', () => {
      student.addMark(3, "математика");
      expect(student.marks).toEqual({"математика": [3]});
      student.addMark(5, "математика");
      expect(student.marks).toEqual({"математика": [3, 5]});
      student.addMark(5, "физика");
      expect(student.marks).toEqual({"математика": [3, 5], "физика": [5]});
    });

    it('невозможность добавления некорректных оценок', () => {
      student.addMark(0, "математика");
      expect(student.marks).toEqual({});
      student.addMark(3, "математика");
      expect(student.marks).toEqual({"математика": [3]});
      student.addMark(10, "математика");
      expect(student.marks).toEqual({"математика": [3]});
      student.addMark(7, "физика");
      expect(student.marks).toEqual({"математика": [3]});
    });

    it('подсчёт средней оценки по предмету', () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      expect(student.getAverageBySubject("математика")).toEqual(4);
    });

    it('подсчёт средней оценки по несуществующему предмету', () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      expect(student.getAverageBySubject("программирование")).toEqual(0);
    });

    it('подсчёт общей средней оценки пустого объекта оценок', () => {
      expect(student.getAverage()).toEqual(0);
    });

    it('подсчёт общей средней оценки', () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      student.addMark(5, "история");
      student.addMark(5, "история");
      expect(student.getAverage()).toEqual(4.5);
    });
  });
});