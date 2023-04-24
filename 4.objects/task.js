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
  if (!this.marks) {
    this.marks = [];
  }
  if (!this.excluded) {
    this.marks.push(...marksToAdd);
  } else {
    console.log(`Студент ${this.name} отчислен. Добавление оценок невозможно.`);
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks) {
    return undefined;
  }
  if (this.marks.length === 0) {
    return 0;
  }
  if (!this.excluded && this.marks.length > 0) {
    const sum = this.marks.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return +(sum / this.marks.length).toFixed(1);
  }
  return undefined;
}

Student.prototype.exclude = function (reason) {
  if (this.marks) {
    delete this.marks;
  }
  delete this.subject;
  this.excluded = reason;
}
