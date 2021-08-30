/*
Falsy:
false;
1. (0) is false;
2. empty string;
3. undefined;
4. null;
5. NaN;

---------------------------------
---------------------------------
Truthy:
true;

1. any kind of number(positive or negetive);
2. any string including single whitespace;
3.[]; all array or empty array;
4.{}; all object or empty object;


*/

let x = {};
console.log('value of x', x)

if (x) {
    console.log('varible is truthy');

}

else {
    console.log('variable is falsy');
}