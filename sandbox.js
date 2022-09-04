// const character = 'Terminator';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach((input) => {
//   console.log(input);
// });
// // tsc sandbox.ts
// // compiles the code. Needs to be exact name with .js file
// // tsc sandbox.ts -w
// // auto-compiles
// // ------------------------------------------------------
var char = 'Predator';
var age = 324;
var isKiller = true;
// age = 55
// age = false
// problems arise when types changes
// const circ = (diameter) => diameter * Math.PI;
// console.log(circ("66"));
// // gets NaN
var circ = function (diameter) { return diameter * Math.PI; };
// :type fixes issue
console.log(circ(55));
// // gets NaN
