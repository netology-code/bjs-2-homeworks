class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		this.name        = name;
		this.releaseDate = releaseDate;
		this.pagesCount  = pagesCount;
		this.state       = 100;
		this.type        = null;
	}
	
	fix() {
		this.state = this.state * 1.5;
		return this.state;
	}

	set state(state) {
		this._state = (state < 0)   ? 0   : state;
		this._state = (state > 100) ? 100 : state;
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
	} 
}

class Book extends PrintEditionItem {

	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type   = "book";
	}
}

class NovelBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
} 

class FantasticBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {

	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {

	constructor(name) {
		this.name  = name;
		this.books = [];
	}

	addBook(book) {
		if(book._state > 30){
			this.books.push(book);
		}
		return;
	}

	findBookBy(type, value) {
		let _book = null;
	 	this.books.filter(function(item) {
			if(item[type] === value) { 
				_book = item; 
			}
		});
		return _book;
	}

	giveBookByName(bookName) {
		let _book;
		if(this.findBookBy("name", bookName) === null){
			return null;
		} else{
			_book = this.findBookBy("name", bookName);
			this.books.splice(this.books.indexOf(this.findBookBy("name", bookName)), 1);
			return _book;
		}
	}
}

class Student {
  constructor(name) {
  	this.name = name;
  	this.subjects; 
  }

  checkMark(mark) {
  	return (mark > 5 || mark < 1) ? alert('Ошибка, оценка должна быть числом от 1 до 5') : mark;
  }

  addGrade(mark, subject) {
  	mark = this.checkMark(mark);
  	if(this.subjects === undefined) {
  		this.subjects = [{name: subject, marks:[mark]}];
  	} else if(!(this.subjects.find(item => item.name === subject))) {
	  	this.subjects.push({name: subject, marks:[mark]});
	  } else {
	  	this.subjects.find(function(item){
	  		if(item.name === subject) {
	  			item.marks.push(mark);
	  		}
	  	});
	  }
  }

  getAverageBySubject(subject) {
  	let subjectAverageMark = null;
  	this.subjects.find(function(item){
	  	if(item.name === subject) {
	  		 subjectAverageMark = item.marks.reduce((acc, item) => acc + item, 0) / item.marks.length;	
	  	} 
	  });
	  return subjectAverageMark;
  }

  getAverage() {
  	let averageMark = null;
  	this.subjects.forEach(function(item){
  		averageMark += item.marks.reduce((acc, item) => acc + item, 0) / item.marks.length;
  	});
  	return averageMark / this.subjects.length;
  }

  exclude(reason) {
  	this.excluded = reason;
  	delete this.subjects; 
  }
}