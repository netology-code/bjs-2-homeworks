function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);
let student3 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = []; 
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
    this.manyMarks = mark;
}

Student.prototype.getAverage = function () {
  let sum = 0
  let avg =  0
  for (let elem in this.marks) {
      sum += this.marks[elem];
      avg = sum / this.marks.length;
    }
  this.avg = avg 
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    delete this.manyMarks;
    delete this.avg;
    this.excluded = reason;
}