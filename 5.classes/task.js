"use strict";

class PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(state) {
    if(state >= 100) {
      this._state = 100;

    } else if(state <= 0) {
      this._state = 0;

    } else {
      this._state = state;
    }

  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this._state * 1.5;
  }

}

class Magazine extends PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }

}

class Book extends PrintEditionItem {

  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }

}

class NovelBook extends Book {

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }

}

class FantasticBook extends Book {

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }

}

class DetectiveBook extends Book {

  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }

}

class Library {

  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state > 30) {
      this.books.push(book);
    } else {
      console.log(`Книгу "${book.name}" нужно починить перед добавлением`)
    }
  }

  findBookBy(type, value) {
    let result;

    this.books.find(e => {
        result = (e[type] === value) ? e : null;
    });

    return result;
  }

  giveBookByName(bookName) {
    const filteredLibrary = this.books.filter(e => e.name !== bookName);
    const foundBook = this.books.find(e => e.name === bookName);
    this.books = filteredLibrary;

    if(foundBook === undefined) {
      return null;
    } else {
      return foundBook;
    }
  }

}

const library = new Library("Библиотека имени Ленина");
const murzilka = new Magazine("Мурзилка", 1919, 60);

library.addBook(murzilka);
library.giveBookByName("Мурзилка");
murzilka.state = 10;
murzilka.fix();
library.addBook(murzilka);

/*

Задача №3

*/

class Student {

  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setSubject(subjectName) {
    this.subject = subjectName;
  }

  addMark(subject, mark) {
    if(this.marks === undefined){
      this.marks = [];
    }

    if(mark > 0 && mark < 6) {
      this.marks.push({subject: subject, mark: mark});
    } else {
      console.log(`Оценка должна быть в диапазоне от 1 до 5. Текущая: ${mark}`);
    }

  }

  addMarks(subject, ...marks) {
    if(this.marks === undefined){
      this.marks = [];
    }

    marks.forEach(mark => {
      if(mark > 0 && mark < 6) {
        this.marks.push({subject: subject, mark: mark});

      } else {
        console.log(`Оценка должна быть в диапазоне от 1 до 5. Текущая: ${mark}`);
      }
    });
  }

  getAverageBySubject(subject) {

    const filteredSubjects = this.marks.filter(e => e.subject === subject);

    return filteredSubjects.reduce((acc, el) => {
      return acc + el.mark;
    }, 0) / filteredSubjects.length;
  }

  getAverage() {
    return this.marks.reduce((acc, el) => acc + el.mark, 0) / this.marks.length;
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
  }

}

const student = new Student('Олег Никифоров');
student.addMark('algebra',5);
student.addMark('algebra',5);
student.addMark('geometry',5);
student.addMark('geometry',4);
//student.addMarks('geometry',1,2,3,4);
student.addMark('geometry',6); // "Ошибка, оценка должна быть числом от 1 до 5"
console.log(student.marks)
console.log(student.getAverageBySubject('geometry')); // Средний балл по предмету geometry 4.5
student.getAverageBySubject('biology'); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude('Исключен за попытку подделать оценки');


