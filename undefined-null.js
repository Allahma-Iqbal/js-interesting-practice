/* 
When we get undefined???
Answer: 

1. variable value not assigned;
2. function declear but didn't written return;
3. just worte return but didn't pass return value or variable; 
4. when parameter doesn't passed;
5. if property that doesn't exist in an object;
6. accessing array element out of range or index;
7. accessing delete array element;
8. explicitly set value to undefined;

*/

// 1. variable value not assigned;

let first;
// console.log(first);

// 2. function declear but didn't written return;

function second(x, y) {
    const sum = x + y;
}

const result = second(9, 10);
// console.log(result);

const number = (a, b) => {
    const sub = a + b;
    return sub;
}

const answer = number(10, 20);
// console.log(answer);


// 3. just worte return but didn't pass return value or variable; 
function add(a, b) {
    const sum = a + b;
    // return;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    return fun;
}

//4. when parameter doesn't passed;

const fourth = add(2, 7);
// console.log(fourth);

function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

//5. if property that doesn't exist in an object;

const fifth = { name: 'sogir', age: 15, location: 'bandarban' };
// console.log(fifth.phone);

// 6. accessing array element out of range or index;
const sixth = [54, 34, 23, 67];
// console.log(sixth[4]);

// 7. accessing delete array element;
delete sixth[2];
// console.log(sixth[2]);

// 8. explicitly set value to undefined;
const seventh = undefined;
// console.log(seventh);


const myObj = { name: 'samad', profession: null }

