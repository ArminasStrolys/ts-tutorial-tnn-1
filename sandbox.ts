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

// let char = 'Predator';
// let age = 324;
// let isKiller = true;

// // age = 55
// // age = false
// // problems arise when types changes

// // const circ = (diameter) => diameter * Math.PI;

// // console.log(circ("66"));
// // // gets NaN

// const circ = (diameter: number) => diameter * Math.PI;
// // :type fixes issue
// console.log(circ(55));
// // // gets NaN
// // ------------------------------------------------------

let names = ['Becky', 'Matt', 'Dylan', 'Sarah'];

names.push('Jack');
// names.push(8); // error because initialy defined array was strings

let mix = [5, 'Ryan', true];
mix.push(5);
mix.push('Will');
mix.push(false);
// mixed array, but type is NOT any, only the the types that were initially added

let man = {
  name: 'Mark',
  age: 88,
};
