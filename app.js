'use strict';

var buffer = [];
var number = '';
var num;
var operation;

function init() {
  document.querySelector('.display').innerHTML = 0;
};

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function clear() {
  number = '';
};

function display(dis) {
  document.querySelector('.display').innerHTML = dis;
};

function getNum() {
  num = parseFloat(number);
  return num;
};

function storeNumber(digit) {
  number += digit;
  display(getNum());
};

function storeOperation(op) {
  operation = [];
  operation = [op, getNum()];
  clear();
};

function equals() {
  var num2 = getNum();
  if (operation !== []) {
    clear();
    switch (operation[0]) {
    case add:
      return add(operation[1], num2);
      break;
    case subtract:
      return subtract(operation[1], num2);
      break;
    case multiply:
      return multiply(operation[1], num2);
      break;
    case divide:
      return divide(operation[1], num2);
      break;
    }
  } else {
    return num2;
  }
};

function displayEquals() {
  var result = equals();
  number = result.toString();
  display(parseFloat(result));
};

function displayClear() {
  clear();
  display(0);
};

add(a, b);
