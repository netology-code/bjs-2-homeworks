// Задания 1 и 2
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  set state(stateItem) {
    this._state = stateItem;

    if (stateItem < 0) {
      this._state = 0;
    }
    if (stateItem > 100) {
      this._state = 100;
    }
  }

  get state() {
    return this._state;
  }
  fix() {
    this.state = 1.5 * this.state;
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
    }
  }
  findBookBy(type, value) {
    let findBook = null;
    this.books.forEach((book) => {
      if ((type = "name")) {
        if (book.name === value) {
          findBook = book;
        }
      }
      if ((type = "pageCount")) {
        if (book.pagesCount === value) {
          findBook = book;
        }
      }
      if ((type = "releaseDate")) {
        if (book.releaseDate === value) {
          findBook = book;
        }
      }
      if ((type = "state")) {
        if (book.state === value) {
          findBook = book;
        }
      }
      if ((type = "type")) {
        if (book.type === value) {
          findBook = book;
        }
      }
      if ((type = "author")) {
        if (book.author === value) {
          findBook = book;
        }
      }
    });
    return findBook;
  }
  giveBookByName(bookName) {
    const findBookIndex = this.books.findIndex((book) => book.name === bookName);
    if (findBookIndex === -1) {
      return null;
    }
    return this.books.splice(findBookIndex, 1)[0];
  }
}

// Задание 3. Студент
class Student {
  constructor(name) {
    this.name = name;
  }

  addMark(mark, subject) {
    if (mark > 5 || mark < 1) {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
      return;
    }

    if (this[subject]) {
      this[subject].marks.push(mark);
    } else {
      this[subject] = { marks: [] };
      this[subject].marks.push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (this[subject]) {
      let sum = 0;
      this[subject].marks.forEach((item) => (sum += item));
      const length = this[subject].marks.length;
      const average = Math.floor((sum * 100) / length) / 100;
      console.log(`Средний балл по предмету ${subject} ${average}`);
      return average;
    } else {
      console.log("Несуществующий предмет");
    }
  }

  getAverage() {
    let sumTotal = 0;
    let length = 0;

    for (let property in this) {
      if (property === "name") {
        continue;
      }

      let sum = 0;
      this[property].marks.forEach((item) => (sum += item));
      sumTotal = sumTotal + sum;
      length = length + this[property].marks.length;
    }
    const average = Math.floor((sumTotal * 100) / length) / 100;
    console.log(`Средний балл по всем предметам ${average}`);
    return average;
  }

  exclude(reason) {
    this.subjects = [];
    this.exclude = reason;
    console.log(reason);
  }
}
