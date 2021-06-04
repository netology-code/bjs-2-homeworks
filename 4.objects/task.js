function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age= age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks = [...this.marks, ...marks];
  } else {
    this.marks = [...this.marks, ...marks];
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return;
  }
  return this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length;
}

Student.prototype.excludeStudent = function(reason) {
  if (this.subject === undefined) {
    return 'Студент не участвует в учебном процессе!'
  }
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}