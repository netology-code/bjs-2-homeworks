describe('Домашнее задание к лекции «Обработка исключений и замыкания»', () => {
    describe('Задача №1', () => {
        it('функция parseCount должна парсить значение 123', () => {
            expect(parseCount("123")).toEqual(123);
        });
    
        it('функция parseCount должна парсить значение 012', () => {
            expect(parseCount("012")).toEqual(12);
        });
    
        it('функция parseCount не должна парсить невалидное значение', () => {
            expect(() => parseCount("ыфва")).toThrowError("Невалидное значение");
        });
    
        it('функция validateCount должна парсить валидное значение', () => {
            expect(validateCount("56")).toEqual(56);
        });
    
        it('функция validateCount не должна парсить невалидное значение', () => {
            expect(validateCount("ыфва")).toEqual(new Error("Невалидное значение"));
        });

        it('функция validateCount должна возвращать перехваченную ошибку', () => {
            expect(validateCount("ыфва").stack.includes("parseCount")).toBeTruthy();
        });
    });

    describe('Задача №2', () => {
        it('объект Triangle должен создаваться', () => {
            expect(new Triangle(1,3,3)).toBeDefined();
        });
    
        it('объект Triangle должен создаваться и правильно считаться периметр и прощадь №1', () => {
            const triangle = new Triangle(2,5,5);
            expect(triangle).toBeDefined();
            expect(triangle.getPerimeter()).toEqual(12);
            expect(triangle.getArea()).toEqual(4.899);
        });
    
        it('объект Triangle должен создаваться и правильно считаться периметр и прощадь №2', () => {
            const triangle = new Triangle(6,10,15);
            expect(triangle).toBeDefined();
            expect(triangle.getPerimeter()).toEqual(31);
            expect(triangle.getArea()).toEqual(20.123);
        });
    
        it('объект Triangle не должен создаваться №1', () => {
            expect(() => new Triangle(1,3,100)).toThrowError("Треугольник с такими сторонами не существует");
        });
    
        it('объект Triangle не должен создаваться №2', () => {
            expect(() => new Triangle(100,3,10)).toThrowError("Треугольник с такими сторонами не существует");
        });
    
        it('объект Triangle не должен создаваться №3', () => {
            expect(() => new Triangle(1,300,10)).toThrowError("Треугольник с такими сторонами не существует");
        });
    
        it('функция getTriangle должна возвращать объект треугольника', () => {
            expect(getTriangle(2,5,5)).toEqual(new Triangle(2,5,5));
        });
    
        it('функция getTriangle не должна возвращать объект треугольника', () => {
            const triangle = getTriangle(1,3,100);
            expect(triangle.getArea()).toEqual('Ошибка! Треугольник не существует');
            expect(triangle.getPerimeter()).toEqual('Ошибка! Треугольник не существует');
        });
    })

});