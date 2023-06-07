"use strict"

function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

let student_1 = new Student("Василиса", "женский", 19);
let student_2 = new Student("Олег", "мужской", 27);
let student_3 = new Student("Маша", "женский", 22);


Student.prototype.setSubject = function(subjectName) {
   this.subject = subjectName;
}
student_1.setSubject("Algebra");
student_2.setSubject("Fizika");
student_3.setSubject("Algebra");

Student.prototype.addMarks = function(...marksToAdd) {
   this.marks = marksToAdd;
}

if(student_1.hasOwnProperty("marks")){
   student_1.addMarks(4, 5, 5, 5);
}

if(student_2.hasOwnProperty("marks")){
   student_2.addMarks(4, 4, 4, 5);
}

Student.prototype.getAverage = function() {
   let sum = 0;
   if(this.marks.length != 0) {
       for(let i = 0; i < this.marks.length; i++) {
           sum += this.marks[i];
       }
       console.log(sum / this.marks.length);
   }else {
       console.log(sum);
   }

}

if(student_1.hasOwnProperty("marks")) {
   student_1.getAverage();
}

if(student_2.hasOwnProperty("marks")) {
   student_2.getAverage();
}

if(student_3.hasOwnProperty("marks")) {
   student_3.getAverage();
}

Student.prototype.exclude = function(reason) {
   delete this.subject;
   delete this.marks;
   this.exclude = reason;
}

student_3.exclude("Плохая учеба");
console.log(student_1);
console.log(student_2);
console.log(student_3);