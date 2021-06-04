"use strict";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(currentState) {
    if (currentState < 0) {
      this._state = 0;
    } else if (currentState > 100) {
      this._state = 100;
    } else {
      this._state = currentState;
    }
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
    this.type = "book";
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
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
      console.log(`Книга '${book.name}' успешно добавлена в нашу библиотеку`);
    } else {
      console.log("Эта книга в плохом состоянии");
    }
  }

  findBookBy(type, value) {
    const findResult = this.books.find((item) => item[type] === value);
    if (findResult) {
      return findResult;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    const findResult = this.books.find((item) => item.name === bookName);
    this.books = this.books.filter((item) => !(item.name === bookName));
    if (findResult) {
      return findResult;
    } else {
      return null;
    }
  }
}

class StudentLog {
  constructor(name) {
    this.name = name;
    this.academicSubjects = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (!this.academicSubjects[subject]) {
      this.academicSubjects[subject] = [];
    }
    if (grade > 0 && grade < 6) {
      this.academicSubjects[subject].push(grade);
    } else {
      console.log(
        `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`
      );
      return this.academicSubjects[subject].length;
    }
  }

  getAverageBySubject(subject) {
    if (!this.academicSubjects.hasOwnProperty(subject)) return 0;
    if (this.academicSubjects[subject].length === 0) {
      return 0;
    }
    let averageMark =
      this.academicSubjects[subject].reduce((prevValue, curValue) => {
        return prevValue + curValue;
      }, 0) / this.academicSubjects[subject].length;
    return Number(averageMark.toFixed(2));
  }

  getTotalAverage() {
    this.academicSubjects.average = [];
    const arr = [];
    for (const key in this.academicSubjects) {
      let immutableArray = [...this.academicSubjects[key]];
      immutableArray = this.getAverageBySubject(key);
      if (immutableArray !== 0) arr.push(immutableArray);
    }
    this.academicSubjects.average = arr;
    return this.getAverageBySubject("average");
  }
}
