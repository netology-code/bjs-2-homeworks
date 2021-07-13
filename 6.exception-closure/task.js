"use strict";

function parseCount(num) {

  try {
    if (Number.parseInt(num) === NaN) {
      throw "Invalid";
    }
  } catch (e) {
    if (e == "Invalid") {
      alert("Невалидное значение");
    }
  }

}

console.log(parseCount('ыфва'));
