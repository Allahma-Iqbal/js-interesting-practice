/*
Data types:

1. Number;
2. String;
3. boolean;
4. undefined;
5. null;
6. object;
7. symbol;

Non-Primitive;

1. Object;

*/


let a = 'hello';
let b = a;
console.log(a, b);
a = 'gello';
// console.log(a, b);


const x = { job: 'web developer' }
const y = x;
console.log(x, y);
x.job = 'front-end developer';
console.log(x, y);

