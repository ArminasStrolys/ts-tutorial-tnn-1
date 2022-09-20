// import { Invoice } from '../public/modules/Invoice.js';
// import { Payment } from '../public/modules/Payment.js';
// import { HasFormatter } from '../public/interfaces/HasFormatter.js';
const person1 = {
    name: 'John',
    age: 50,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
const greetPerson = (person) => {
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
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
// <T> - specify the type
// const docx: Resource<object> = {
//   id: 5555,
//   resName: 'Human',
//   data: { name: 'Max' },
// };
const docx = {
    id: 5555,
    resName: 'Human',
    data: 'Max',
};
