# Домашнее задание к лекции. «4. Объекты»

### Задача №1. Инкапсуляция студента
Мы хотим инкапсулировать логику работы со студентами в объекты, чтобы создавать студентов, устанавливать им предмет, добавлять оценки, считать средний балл и отчислять.

Для этого:
1. Создайте функцию конструктор `Student(name, gender, age)` и с помощью оператора `new` несколько студентов. 

2. Создайте доступный для всех студентов `student` метод `setSubject(subjectName)`, который при вызове будет устанавливать поле предмет `subject` в `subjectName`. Для этого добавьте в свойство `Student.prototype` функцию `setSubject`.
```js
Student.prototype.setSubject = function (subjectName) {
  //ваш код
}
```

3. Создайте метод `addMark(mark)` по аналогии с п.2, который при вызове будет добавлять студенту оценку `mark` в свойство `marks` объекта. Обратите внимание, что ранее мы нигде не задавали свойство marks. Значит надо проверять, что свойство существует. Сделать это в методе можно так:
```js
  if(this.marks === undefined){ 
    // добавить первую оценку 
    } else {
      // добавить вторую и последующие оценки в массив
    }
```

4. Создайте метод `addMarks(mark1,mark2,mark3...)` по аналогии с п.2, который при вызове будет добавлять студенту сразу несколько оценок. 
Подсказка: так как количество оценок неизвестно, используйте параметр rest.

5. Создайте метод `getAverage()` по аналогии с п.2, который при вызове будет возвращать среднее арифметическое оценок студента.

6. Создайте метод `exclude(reason)` по аналогии с п.2, который при вызове будет исключать студента и устанавливать причину исключения. Для этого надо удалить свойства `subject` и `marks` и добавить свойство `excluded` со значением `reason`.

### Пример:
```js
let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); // 4.666666666666667
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}
```

## Решение задач

1. Произведите [Fork](https://ru.wikipedia.org/wiki/Форк) репозитория с задачами. Fork нужно делать перед выполнением каждой домашней работы.
2. Перейдите в папку задания. `cd ./4.objects`.
3. Откройте файл `task.js` в редакторе кода и выполнить задание.
4. Самостоятельно вызывать функции не нужно, если об этом не просят в задании.
5. Откройте файл `index.html` в браузере и с помощью консоли DevTools убедитесь, что результаты выводятся правильно.
6. Откройте файл `test-runer.html` в браузере и убедитесь, что все тесты выполняются. На вкладке Spec List можно видеть, какие тесты выполнились, а какие нет.
7. Добавьте файл `task.js` в индекс git с помощью команды `git add %file-path%`, где %file-path% - путь до целевого файла. `git add task.js`.
8. Сделать коммит используя команду `git commit -m '%comment%'`, где %comment% — это произвольный комментарий к вашему коммиту. `git commit -m 'first commit variables'`.
9. Опубликуйте код в репозиторий homeworks с помощью команды `git push -u origin main`.
10. Прикрепите ссылку на репозиторий в личном кабинете на сайте [Нетологии][6].

[0]: https://github.com/
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/blob/master/git/github.md
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/README.md
[6]: https://netology.ru/

_Никаких файлов прикреплять не нужно._

Любые вопросы по задачам задавайте в чате учебной группы.
