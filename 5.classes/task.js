class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(tempState) {
    if (tempState < 0) {
      this._state = 0;
    } else if (tempState > 100) {
      this._state = 100;
    } else {
      this._state = tempState;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    const fixLevel = 1.5;
    const tempState = this._state * fixLevel;
    this.state = tempState;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount, author);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount, author);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount, author);
    this.type = 'detective';
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
    let bookIndex = this.books.findIndex(book => book[type] === value);
    if (bookIndex !== -1) {
      return this.books[bookIndex];
    }
    return null;
  }

  giveBookByName(bookName) {
    let bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex !== -1) {
      let book = this.books[bookIndex];
      this.books.splice(bookIndex, 1);
      return book;
    }
    return null;
  }
}


// ПРОВЕРЯЕМ
console.log("=======================================");
console.log("ЗАДАЧА 1");
const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
console.log("=======================================");

console.log(" ");
console.log("ЗАДАЧА 2");
const library = new Library("Библиотека имени Ленина");

library.addBook(
new DetectiveBook(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
)
);
library.addBook(
new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3