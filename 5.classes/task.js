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
        let element;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                element = this.books[i];
                delete this.books[i];
                this.books = this.books.slice(0, this.books.length - 1);
                return element;
            }
        }
        return null;
    }
}

