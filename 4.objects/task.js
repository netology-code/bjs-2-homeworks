function Student(name, gender, age) {
  let student1 = new Student("Tony", "male", 37);
  let student2 = new Student("Buzz", "female", 35);
};

Student.prototype.setSubject = function (subjectName) {
  let subject = new setSubject("");
};

Student.prototype.addMark = function (mark) {
  mark = new addMark(Number);
  let marks = [];
  if (this.marks === undefined) { 
    mark = this.marks;
  } else {
    this.marks.push(mark);
  };
};

Student.prototype.addMark = function (...mark) {
  return `marks: ${marks}`;
};

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < length.marks; i++) {   
    sum += marks[i];
  };
  return Number((sum / marks.length).toFixed(2));
};

Student.prototype.exclude = function (reason) {
  delete Student.prototype.setSubject, Student.prototype.addMark;
  this.exclude = "reason";
};