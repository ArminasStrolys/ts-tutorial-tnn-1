// interfaces

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const person1: isPerson = {
  name: 'John',
  age: 50,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

const greetPerson = (person: isPerson) => {
  console.log('Hi, ', person.name);
};

greetPerson(person1);

import { Invoice } from './modules/Invoice.js';
//------------------------ CLASSES

// class Invoice {
//  readonly client: string;
//  private details: string;
//  public amount: number;

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} eu for ${this.details}`;
//   }
// }

const invoice1 = new Invoice('Carl', 'Drugs', 500);
const invoice2 = new Invoice('Jill', 'Guns', 125.25);

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

console.log(invoices);

//------------------------------------

// const anchor = document.querySelector('a')

// console.log(anchor.href)

//// to remove the error, you need to check if the value is really not null like so:

// if (anchor) {
//   console.log(anchor.href)
// }

//// or another solution

// const anchor = document.querySelector('a')!

// console.log(anchor.href)

//------------------------

// // const form = document.querySelector('form')!
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// const type = document.querySelector('#type') as HTMLSelectElement;
// const toForm = document.querySelector('#toForm') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
// });

//------------------------ CLASSES
