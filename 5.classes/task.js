class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state, type);
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);
        if (typeof findBook === 'object') {
            return findBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let giveBoook = this.books.find(book => book.name === bookName);
        if (typeof giveBoook === 'object') {
            let index = this.books.indexOf(giveBoook);
            this.books.splice(index, 1);
            return giveBoook;
        }
        else {
            return null;

        }
    }

    giveBookByName(bookName) {
        let giveBoook = this.books.find(book => book.name === bookName);
        if (typeof giveBoook === 'object') {
            let index = this.books.indexOf(giveBoook);
            this.books.splice(index, 1);
            return giveBoook;
        }
        else {
            return null;

        }
    }


}


/*3 задание*/


class Student {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    setSubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            return console.log('Предмет уже существует.');
        }
        else {
            this.journal[subjectName] = [];
        }
    }
    
    addMark(mark, subjectName) {
        if (this.journal.hasOwnProperty(subjectName) !== true) {
            this.journal[subjectName] = [];
            console.log('Несуществующий предмет. Предмет создан.');
        }
        if ((typeof mark === 'number') && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark);
        }
        else {
            return console.log('Ошибка, оценка должна быть числом от 1 до 5');
        }
    }

    getAverageBySubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            let sum = 0;
            let marks = this.journal[subjectName];
            marks.forEach((item) => sum += item);
            let averageBySubject = sum / marks.length;
            return averageBySubject;
        } else {
            return console.log('Несуществующий предмет.');
        }
    }

    getAverage() {
        let sum = 0;
        let marks = Object.values(this.journal);
        let resultMarks = [];
        marks.forEach((item) => resultMarks = [].concat(resultMarks, item));
        resultMarks.forEach((item) => sum += item);
        let average = sum / resultMarks.length;
        return average;
    }

    exclude(reason) {
        delete this.journal;
        this.excluded = reason;
    }
}
