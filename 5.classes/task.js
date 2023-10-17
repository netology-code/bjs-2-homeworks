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
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
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

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (this.marks[subject]) {
      this.marks[subject].push(mark);
    } else {
      this.marks[subject] = [mark];
    }
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      console.log('По предмету ' + subject + ' оценок нет');
      return 0;
    }
    const subjectSumm = this.marks[subject].reduce((summ, mark) => summ + mark, 0);
    console.log('Средняя оценка по предмету ' + subject + ' = ' + (subjectSumm / this.marks[subject].length));
    return subjectSumm / this.marks[subject].length;
  }

  getAverage() {
    const allKeys = Object.keys(this.marks);
    if (allKeys.length === 0) {
      return 0;
    }
    return allKeys.reduce((sum, key) => sum + this.getAverageBySubject(key), 0) / allKeys.length;
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
console.log("=======================================");
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

console.log("=======================================");

console.log(" ");
console.log("=======================================");
console.log("ЗАДАЧА 3");

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75