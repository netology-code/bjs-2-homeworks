function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
    this.marks = [];
    } 
      this.marks.push(mark);
}

Student.prototype.addMarks = function(mark1,mark2,mark3,...rest) {
  if(this.marks === undefined){ 
    this.marks = [];
    } 
      this.marks.push(mark1,mark2,mark3,...rest);
}

Student.prototype.getAverage = function() {
  let sum = 0;
  for (i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student3 = new Student("Tom", "male", 36);
student3.setSubject("Biology");
student3.addMark(5);
student3.addMark(4);
student3.addMark(5);

let student4 = new Student("Bill", "female", 32);
student4.setSubject("Geometry");
student4.addMark(2);
student4.addMark(3);
student4.addMark(2);
student4.exclude('low grades')

console.log(student3); 
console.log(student4);