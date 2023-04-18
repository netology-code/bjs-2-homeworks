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
