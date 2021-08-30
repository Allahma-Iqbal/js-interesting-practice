/* 
1. Let and Const is Block & local scope variable; 
2. let and const cant hoisting;
3. var is hoisitng;
4. var is global variable;


*/



const favNum = 39;

function add(first, second) {
    const result = first + second;
    // console.log(mood);
    if (result > 9) {
        let mood = 'happy';
        mood = 'cranky';

    }
    // console.log(mood)
    return result;
}

const sum = add(10, 5);
// console.log(sum);


// console.log(favNum);

for (var i = 0; i < 10; i++) {

}

console.log(i);