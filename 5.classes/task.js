class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  
    fix() {
      this.state *= 1.5;
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
      this.type = "book";
      this.author = author;
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
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); // "Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); // 10
  picknick.fix();
  console.log(picknick.state); // 15

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (const book of this.books) {
        if (book[type] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          const givenBook = this.books[i];
          this.books.splice(i, 1);
          return givenBook;
        }
      }
      return null;
    }
  }
  
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      const subjectMarks = this.marks[subject];
      if (!subjectMarks || subjectMarks.length === 0) {
        return 0;
      }
  
      const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
      return sum / subjectMarks.length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
  
      const totalAverage = subjects.reduce((acc, subject) => {
        return acc + this.getAverageBySubject(subject);
      }, 0);
  
      return totalAverage / subjects.length;
    }
  }