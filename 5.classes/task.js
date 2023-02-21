class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state (newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state () {
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
    constructor(author ,name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book{
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
  
  //2 задача

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
      const findResult = this.books.find((item) => item[type] === value);
      return findResult || null;
    }
  
    giveBookByName(bookName) {
      const findResult = this.books.find((item) => item.name === bookName);
      this.books = this.books.filter((item) => item.name !== bookName);
      return findResult || null;
    }
  }
 
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (Object.keys(this.marks).includes(subject) === false) {
          this.marks[subject] = []; 
        }
        this.marks[subject].push(mark); 
      }
    }
  
    getAverageBySubject(subject) {
      if ((Object.keys(this.marks).includes(subject) === false)) {
        return 0;
      } else {
        let sum = 0;
        for (let index = 0; index < this.marks[subject].length; index++) {
          sum += this.marks[subject][index];
        }
        return sum / this.marks[subject].length;
      }
    }
    
    getAverage() {
      let sum = 0;
      for (let index = 0; index < Object.keys(this.marks).length; index++) {
        sum += this.getAverageBySubject(Object.keys(this.marks)[index]);
      }
      return sum / Object.keys(this.marks).length;
    }
  }
