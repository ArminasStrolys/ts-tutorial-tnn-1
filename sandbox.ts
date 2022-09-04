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

// let names = ['Becky', 'Matt', 'Dylan', 'Sarah'];

// names.push('Jack');
// // names.push(8); // error because initialy defined array was strings

// let mix = [5, 'Ryan', true];
// mix.push(5);
// mix.push('Will');
// mix.push(false);
// // mixed array, but type is NOT any, only the the types that were initially added

// let man = {
//   name: 'Mark',
//   age: 88,
// };
// // ------------------------------------------------------

let char: string;
let age: number;
let isTrue: boolean;

// age = 'Paper'
age = 77;

let theArray: string[] = [];

theArray.push('help');

// union type
let mixedArray: (string | number | boolean)[] = [];
mixedArray.push(8);
mixedArray.push('False');
mixedArray.push(false);
console.log(mixedArray);

let obj: object;
obj = { key: '123', lock: 888 };

let obj2: {
  key: number;
  lock: string;
};

obj2 = { key: 123, lock: 'pw' };
