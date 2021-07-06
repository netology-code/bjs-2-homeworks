function Student(name, gender, age) {
    // Ваш код
    this.name   = name;
    this.gender = gender;
    this.age    = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  //ваш код
  if(this.marks === undefined){ 
    this.marks = [mark]; 
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  marks.forEach(el => this.addMark(el));
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks; 
}