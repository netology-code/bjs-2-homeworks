function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.excluded) {
    console.log(`Студент ${this.name} отчислен. Добавление оценок невозможно.`);
    return;
  }
  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0) {
    return 0;
  }
  if (this.marks.length > 0) {
    const sum = this.marks.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return +(sum / this.marks.length).toFixed(1);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};
