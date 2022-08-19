class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        let result = this.state * 1.5;
        this.state = result;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
            return;
        }
        if (number > 100) {
            this._state = 100;
            return;
        }
        this._state = number;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.state = 100;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
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
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            const element = this.books[i];
            if (element[type] === value)
                return element;
        }
        return null;
    }

  giveBookByName(bookName) {
    let element = []
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        element = this.books.splice(i,1);
        return element[0];
      }
    }
    return null;
  }
}


class Student {
  constructor(name) {
    this.name = name;
    this.map = new Map();
  }

  addMark(mark, subject) {
    if (mark > 5) {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
      return;
    }
    if (this.map.has(subject)) {
      this.map.get(subject).push(mark);
      return;
    }
    this.map.set(subject, [mark]);
  }

  getAverageBySubject(subject) {
    if (!this.map.has(subject)) {
      console.log("Несуществующий предмет");
      return;
    }
    let avvSum = 0;
    let arr = new Array();
    arr = this.map.get(subject);
    for (let i = 0; i < arr.length; i++) {
      avvSum += arr[i];
    }
    return avvSum / arr.length;
  }

  getAverage() {
    let arr = [];
    let count = 0;
    let sum = 0;
    arr = this.map.values();
    for (const value of arr) {
      for (let i = 0; i < value.length; i++) {
        sum += value[i]; 3
        count++;
      }
    }
    return sum / count;
  }

  exclude() {
    console.log("Исключен за попытку подделать оценки");
  }
}

