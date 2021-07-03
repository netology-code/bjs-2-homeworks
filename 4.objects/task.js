function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [];
  }

  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
    this.marks = [];
  }

  marks.forEach(mark => {
    this.marks.push(mark);
  });
}

Student.prototype.getAverage = function () {

  //return this.marks.reduce((a, b) => a + b / this.marks.length, 0); //  2.333333333333333

  let total = 0;
  this.marks.forEach(e => {
    total += e;
  })
  return total/this.marks.length;

}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
}


// ваш код для остальных методов

let student3 = new Student("Jerry", "male", 22);

student3.setSubject("Algebra");
student3.addMarks(2,3,2);

console.log(student3.getAverage());
console.log(student3.marks);
