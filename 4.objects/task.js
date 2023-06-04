"use strict"

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student_1 = new Student("Василиса", "женский", 19);
student_1.marks = [];
let student_2 = new Student("Олег", "мужской", 27);
student_2.marks = [];

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}
student_1.setSubject("Algebra");
student_2.setSubject("Fizika");

if(student_1.hasOwnProperty("marks")){
    student_1.addMarks = function(...marksToAdd) {
        this.marks = marksToAdd;
    }
}

if(student_2.hasOwnProperty("marks")){
    student_2.addMarks = function(...marksToAdd) {
        this.marks = marksToAdd;
    }
}

student_1.addMarks(4, 5, 5, 5);
student_2.addMarks(4, 5, 4, 5);

console.log(student_1);
console.log(student_2);

if(student_1.hasOwnProperty("marks")) {
    student_1.getAverage = function() {
        let sum = 0;
        if(student_1.marks.length != 0) {
            for(let i = 0; i < student_1.marks.length; i++) {
                sum += student_1.marks[i];
            }
            console.log(sum);
        }else {
            console.log(sum);
        }
        
    }

}

if(student_2.hasOwnProperty("marks")) {
    student_2.getAverage = function() {
        let sum = 0;
        if(student_2.marks.length != 0) {
            for(let i = 0; i < student_2.marks.length; i++) {
                sum += student_2.marks[i];
            }
            console.log(sum);
        }else {
            console.log(sum);
        }
        
    }

}

4
student_1.getAverage();
student_2.getAverage();


