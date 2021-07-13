"use strict";

function parseCount(num) {

  try {
    if (isNaN(Number.parseInt(num))) {
      throw new Error("Невалидное значение");
    }

  } catch (e) {
    console.log(e);
  }

  return Number.parseInt(num);
}

function validateCount(num) {
  parseCount(num);
}

console.log(parseCount('ыфва'));
