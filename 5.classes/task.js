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
    if (state >= 100) {
      this._state = 100;

    } else if (state <= 0) {
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
    if (book.state > 30) {
      this.books.push(book);
    } else {
      console.log(`Книгу "${book.name}" нужно починить перед добавлением`)
    }
  }

  findBookBy(type, value) {
    let result = null;

    this.books.find(e => {
      return result = (e[type] === value) ? e : null;
    });

    return result;
  }

  giveBookByName(bookName) {
    const filteredLibrary = this.books.filter(e => e.name !== bookName);
    const foundBook = this.books.find(e => e.name === bookName);
    this.books = filteredLibrary;

    if (foundBook === undefined) {
      return null;
    } else {
      return foundBook;
    }
  }

}

const library = new Library("Библиотека имени Ленина");
const murzilka = new Magazine("Мурзилка", 1919, 60);
const murzilka2 = new Magazine("Мурзилка2", 1924, 60);
const murzilka3 = new Magazine("Мурзилка3", 1926, 60);
const murzilka4 = new Magazine("Мурзилка4", 1960, 60);

library.addBook(murzilka);
library.addBook(murzilka2);
library.addBook(murzilka3);
library.addBook(murzilka4);
console.log(library.findBookBy("releaseDate", 1926).name); //"Мурзилка3"
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

    if (mark > 0 && mark < 6) {
      mark = mark;
    } else {
      console.log('Ошибка, оценка должна быть числом от 1 до 5');
      return 'Ошибка, оценка должна быть числом от 1 до 5';
    }

    if (this.marks === undefined && Number.isInteger(mark)) {
      this.marks = [{ subject: subject, marks: [mark] }];

    } else if (!this.marks.find(e => e.subject === subject)) {
      this.marks.push({ subject: subject, marks: [mark] });

    } else {
      this.marks.find(e => {
        if (e.subject === subject) {
          e.marks.push(mark);
        }
      });
    }

  }

  addMarks(subject, ...marks) {
    if (this.marks === undefined) {
      this.marks = [];
    }

    marks.forEach(mark => {
      this.addMark(subject, mark);
    });

  }

  getAverageBySubject(subject) {

    const filteredSubjects = this.marks.find(e => { return e.subject === subject });

    if (filteredSubjects === undefined) {
      return 'Несуществующий предмет';

    } else {
      return filteredSubjects.marks.reduce((acc, el) => {
        return acc + el;
      }, 0) / filteredSubjects.marks.length;

    }

  }

  getAverage() {
    let total = 0;

    this.marks.forEach(function (el) {
      total += el.marks.reduce((acc, elem) => acc + elem, 0) / el.marks.length;
    });

    return total / this.marks.length;

  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
  }

}

const student = new Student('Олег Никифоров');
student.addMark('algebra', 5);
student.addMark('algebra', 5);
student.addMark('geometry', 5);
student.addMark('geometry', 4);
//student.addMarks('geometry',1,2,3,4);
student.addMark('geometry', 6); // "Ошибка, оценка должна быть числом от 1 до 5"
console.log(student.marks)
console.log(student.getAverageBySubject('geometry')); // Средний балл по предмету geometry 4.5
console.log(student.getAverageBySubject('biology')); // Несуществующий предмет
console.log(student.getAverage()); // Средний балл по всем предметам 4.75
student.exclude('Исключен за попытку подделать оценки');


console.log(student);