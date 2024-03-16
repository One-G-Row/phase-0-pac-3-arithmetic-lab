//addition
function add(a, b) {
  return a + b;
}
add(200, 50);

//subtraction
function subtract(a, b) {
  return a - b;
}
subtract(2, 3);

//multiplication
let c = 3;
let d = 4;
function multiply(c, d) {
  return c * d;
}
multiply();

//division
let a = 9;
let b = 3;
function divide(a, b) {
  return a / b;
}
divide();

//increment
function increment(n) {
  return n + 1;
}
increment(4);

//decrement
function decrement(n) {
  return n - 1;
}
decrement(6);

//parseInt
/*let n = 54;
let base = 2;*/
function makeInt(n) {
  return parseInt(n, 10);
}
console.log(makeInt(5043));

//preserves the decimal number
function preserveDecimal(n) {
  return parseFloat(n);
}
console.log(preserveDecimal(4.21513));
