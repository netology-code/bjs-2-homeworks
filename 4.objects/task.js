function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    this.marks = [];
  }
  if (!this.excluded) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks) {
    return undefined;
  }
  if (this.marks.length === 0) {
    return 0;
  }
  if (!this.excluded) {
    const sum = this.marks.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return +(sum / this.marks.length).toFixed(1);
  }
  return undefined;
}

Student.prototype.exclude = function (reason) {
  if (this.marks) {
    delete this.marks;
  }
  delete this.subject;
  this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2.getAverage()); // undefined
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
