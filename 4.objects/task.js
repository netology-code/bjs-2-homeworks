//Функция конструктор
 function Student(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

}
// Пункт 1 Создание новых обьектов
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

//Пункт 2. Создание метода setSubject(subjectName)

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
  }
  student1.setSubject('Геометрия');

// Пункт 4. Создание addMarks(...marksToAdd)
Student.prototype.addMarks = function (...marksToAdd)
{
  for(var key in this.marks){
    if (this.marks.hasOwnProrerty(key)) {
      console.log("Пользователь отчислен");
    }
     else{
      this.marks = marksToAdd;
     }
  }
  
  }
  student1.addMarks(5);
  student2.addMarks(6,6);
//Пункт 5. Создание метода getAverage()

// Student.prototype.getAverage = function getAverage(){
//     let sum = 0;  
//     if (!student1.hasOwnProperty("marks")) {
//       return 0;
//     }
//     else if  (!Student2.hasOwnProperty("marks")) {
//       return 0;  
//     }
//     else{
//       for (let i = 0; i< this.marks.length; i++){
//         sum += this.marks[i];
//         return sum / this.marks.length;
      
//      }
     
//     }
//   }
//   console.log(student1.getAverage());
//   student2.getAverage();
 //Пункт 6. Создание метода exclude(reason)
 Student.prototype.exclude = function exclude(reason){
    if(marks.lenght == 0){
console.log(`Вы отчислены ${reason}`);
        delete Student.subject;
        delete Student.marks;
        Student.exclude = reason;

    }
    this.exclude = exclude;
    return reason;
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


