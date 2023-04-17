function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
	if ('marks' in this) {
		this.marks.push(...marks);
	} else {
		return;
	}
};

Student.prototype.getAverage = function () {
	return !('marks' in this) || this.marks.length === 0
		? 0
		: this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length;
};

Student.prototype.exclude = function (reason) {
	Student.prototype.reason = reason;

	if (this.reason.length > 0) {
		delete this.marks;
		delete this.subject;
		this.excluded = reason;
	}
};

let student1 = new Student('Василиса', 'женский', 19);
student1.setSubject('Algebra');
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student('Артём', 'мужской', 25);
student2.setSubject('Geometry');
student2.exclude('плохая учёба');
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
