"use strict"


function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);


Student.prototype.setSubject = function(subjectName) {
   this.subject = subjectName;
}
student1.setSubject("Algebra");
student2.setSubject("Geometry");

Student.prototype.addMarks = function(...marksToAdd) {
   this.marks = marksToAdd;
}

if(student1.hasOwnProperty("marks")){
   student1.addMarks(4, 5, 4, 5);
}

if(student2.hasOwnProperty("marks")){
   student2.addMarks(4, 4, 4, 5);
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

if(student1.hasOwnProperty("marks")) {
   student1.getAverage();
}

if(student2.hasOwnProperty("marks")) {
   student2.getAverage();
}

Student.prototype.exclude = function(reason) {
   delete this.subject;
   delete this.marks;
   this.exclude = reason;
}

student2.exclude("Плохая учеба");
console.log(student1);
console.log(student2);
