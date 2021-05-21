function calculate1Task(){
    const count = document.getElementById("count").value
    const result = validateCount(count);
    document.getElementById("parcedNumber").innerText = result;
}

function calculate2Task(){
    const a = +window.a.value;
    const b = +window.b.value;
    const c = +window.c.value;
    const triangle = getTriangle(a,b,c);
    document.getElementById("triangleArea").innerText = `Площадь треугольника: ${triangle.getArea()}`;
    document.getElementById("trianglePerimeter").innerText =  `Периметр треугольника: ${triangle.getPerimeter()}`;
}