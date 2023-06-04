
 function student(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
}
let studentfirst = new student("Василиса", "женский", 19);
studentfirst.marks = [];
let studentSecond = new student("Артём", "мужской", 25);
studentfirst.marks = [];

student.prototype.setSubject = function (subjectName) {
   this.subjectName = subjectName;
  }

student.prototype.addMarks = function (...marksToAdd) {
   this.marks = marksToAdd;
  }

  student.prototype.getAverage = function getAverage(...Average){
    let sum = 0;
    Average.forEach(element => { sum += element });
    return sum;
  }
  student.prototype.exclude = function exclude(reason){
    if(marks.lenght == 0){
console.log(`Вы отчислены ${reason}`);
        delete student.subject;
        delete student.marks;
        student.exclude = 'reason';

    }
  }

// "use strict"

// function Student(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
// }


// let student_1 = new Student("Василиса", "женский", 19);
// student_1.marks = [];
// let student_2 = new Student("Олег", "мужской", 27);
// student_2.marks = [];

// Student.prototype.setSubject = function(subjectName) {
//     this.subject = subjectName;
// }
// student_1.setSubject("Algebra");
// student_2.setSubject("Fizika");

// if(student_1.hasOwnProperty("marks")){
//     student_1.addMarks = function(...marksToAdd) {
//         this.marks = marksToAdd;
//     }
// }

// if(student_2.hasOwnProperty("marks")){
//     student_2.addMarks = function(...marksToAdd) {
//         this.marks = marksToAdd;
//     }
// }

// student_1.addMarks(4, 5, 5, 5);
// student_2.addMarks(4, 5, 4, 5);

// console.log(student_1);
// console.log(student_2);

// if(student_1.hasOwnProperty("marks")) {
//     student_1.getAverage = function() {
//         let sum = 0;
//         if(student_1.marks.length != 0) {
//             for(let i = 0; i < student_1.marks.length; i++) {
//                 sum += student_1.marks[i];
//             }
//             console.log(sum);
//         }else {
//             console.log(sum);
//         }
        
//     }

// }

// if(student_2.hasOwnProperty("marks")) {
//     student_2.getAverage = function() {
//         let sum = 0;
//         if(student_2.marks.length != 0) {
//             for(let i = 0; i < student_2.marks.length; i++) {
//                 sum += student_2.marks[i];
//             }
//             console.log(sum);
//         }else {
//             console.log(sum);
//         }
        
//     }

// }

// student_1.getAverage();
// student_2.getAverage();


