// Задача 1

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state=this.state * 1.5;
    }

    set state(fix){
        if (fix < 0){
            this._state = 0;
        }else if (fix > 100 ){
            this._state = 100;
        }else{
            this._state = fix;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends Magazine{
    
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}


class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача 2

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(this.state < 30){
            this.books=this.books;
        }else{
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for(let i=0; i<this.books.length; i++){
            if(this.books[i][type] === value){
				return this.books[i];
			}
        }
		return null;
    }

    giveBookByName(bookName){
        let reqBook = this.findBookBy('name', bookName);
		let indexOfBook = this.books.indexOf(reqBook);
		if (indexOfBook === -1) return null;
		return this.books.splice(indexOfBook, 1)[0];
    }
}

// Задача 3

class Student{
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
  }

  addMark(mark, subjectName){
    if (mark<1){
        return "Оценка должна быть от 1 до 5"
    }else if (mark>5) {
        return "Оценка должна быть от 1 до 5"
    }else {
        if(this.marks === undefined){
            this.marks = [mark, subjectName];
            } else {
            this.marks.push(mark, subjectName);
            }
  }}

  
  getAverageBySubject(subjectName){
      let sum = 0;
      let marksNumber = 0;
      for(let i=1; i < this.marks.length; i=i+2){
        if (subjectName == this.marks[i]){
            sum = sum + this.marks[i-1];
            marksNumber++
        }else{
            marksNumber=marksNumber;
        }
      }
      if(sum == 0){
          return "Несуществующий предмет"
      }else{
          return sum/marksNumber;
      }
    }
   
    getAverage(){
        let sum = 0;
        for(let i=1; i<this.marks.length; i=i+2){
          sum = sum + this.marks[i-1];
          }
        return sum/(this.marks.length/2);  
        }     
}