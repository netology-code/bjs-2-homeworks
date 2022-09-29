// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.fix();
// console.log(sherlock.state); //100
// sherlock.state =10;
// console.log(sherlock.state); //10

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15

// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// const holms = library.books[0];
// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 3
// library.giveBookByName("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе");
// holms.state = 10;
// library.addBook(holms);
// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 3
// holms.fix(); //15
// holms.fix(); //22.5
// holms.fix(); //33.75
// library.addBook(holms);
// library.giveBookByName("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 2

//Student
const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(3, "algebra");
student.getAverageBySubject("algebra"); // Средний балл по предмету algebra 4

student.addMark(3, "geometry");
student.addMark(4, "geometry");
student.addMark(3, "geometry");

student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 3.33

student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 3.6

student.exclude("Исключен за попытку подделать оценки");
