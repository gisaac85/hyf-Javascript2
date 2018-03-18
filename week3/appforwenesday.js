//Step 4: JavaScript

// 1.We saw that we can pass functions as arguments to other functions. Your
// task is to write a function that takes another function as an argument and
// runs it.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function result(func) {
    let x = 1;
    let y = 3;
    return func(x, y);
}

console.log("1+3 = " + result(add));
console.log("1-3 = " + result(subtract));

// 2.You must write a function that takes 4 arguments. - A start value - An end
// value - A callback to call if the number is divisible by 3 - A callback to
// use if the number is divisible by 5

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let arr = [];

    for (let i = startIndex; i <= stopIndex; i++) {

        arr.push(i);



        if (i % 3 == 0) {
            threeCallback();
        }
        if (i % 5 == 0) {
            fiveCallback();
        }


    }

    return console.log(arr);

}

const sayThree = () => console.log('sayThree');
const sayFive = () => console.log('sayFive');

threeFive(10, 15, sayThree, sayFive);

//3.Please solve this problem using: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

//3.1 A for loop.
function repeatStringNumTimes1(str, num) {

    let times = 0;
    let text = "";
    //if (num <= 0) {
    //  return "";
    //}
    for (times = 0; times < num; times++) {
        text = text + str;
    }
    return text;
}
console.log(repeatStringNumTimes1("abc", 3));
console.log(repeatStringNumTimes1("abc", -4));

//3.2 A while loop.
function repeatStringNumTimes2(str, num) {

    let times = 0;
    let text = "";
    // if (num <= 0) {
    //   return "";
    //}
    while (times < num) {
        times += 1;
        text = text + str;
    }
    return text;
}
console.log(repeatStringNumTimes2("abc", 3));
console.log(repeatStringNumTimes2("abc", -1));

//3.3 A do loop.
function repeatStringNumTimes3(str, num) {

    let times = 0;
    let text = "";
    if (num <= 0) {
        return "";
    }

    do {

        text = text + str;
        times += 1;
    }
    while (times < num);
    return text;
}
console.log(repeatStringNumTimes3("abc", 3));
console.log(repeatStringNumTimes3("abc", -1));

//4.Some practice with objects https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions

let Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

let MotorBike = function () {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;

};
let myCar = new Car(); // craete a new object
console.log(myCar);
let myBike = new MotorBike(); // create a new object
console.log(myBike);

//5.Nested loops https://www.freecodecamp.com/challenges/nesting-for-loops

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

console.log(multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]));

//6.6. We did some work with arrays - var arr = [1,2,3] We can also nest arrays inside arrays like this var arr2d = [[1,2], [3,4], [5,6]] (for math people you can think of this as a matrix) How would you print all the items of an array with 3 dimensions? How about with K dimensions? What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)
// two deminisional 
let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    arrText = '';

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arrText += arr[i][j] + ' ';
    }
    console.log(arrText);
    arrText = '';
}

//OR

let items = [
    //  /*0  1 */
    //0  [1, 2],
    //1  [3, 4],
    //2  [5, 6]

    [1, 2],

    [3, 4],

    [5, 6]
];
console.log(items[2][1]); // 6
console.log(items[0][1]); // 2

// theory with example:

//JavaScript Multidimensional Arrays
let ar = [
    ['apple', 'orange', 'pear'],
    ['carrots', 'beans', 'peas'],
    ['cookies', 'cake', 'muffins', 'pie']
];
//How to Access Elements of a Multidimensional Array
console.log(ar[2][1]); // cake
//Adding and Removing Elements in Multidimensional Arrays
ar[0][3] = 'banana';
console.log(ar[0]); // ["apple", "orange", "pear", "banana"]
//Here we use the push method to add two new elements to the second sub-array:
ar[1].push('kale', 'broccoli');
console.log(ar[1]); // ["carrots", "beans", "peas", "kale", "broccoli"]
//we can also use array methods to remove elements from sub-arrays, as we demonstrate here with the pop method:
ar[2].pop(); // remove last element from 3rd sub-array
console.log(ar[2]); // cookies,cake,muffins
//Looping through Multidimensional Arrays
//When you want to iterate over the elements of a multidimensional array, use nested for loops:
// outer loop applies to outer array
for (let i = 0, len = ar.length; i < len; i++) {
    // inner loop applies to sub-arrays
    for (let j = 0, len2 = ar[i].length; j < len2; j++) {
        // accesses each element of each sub-array in turn
        console.log(ar[i][j]);
    }
}

//7. Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.
let x = 9;

function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);

let y = {
    x: 9
};


function f2(val) {

    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
/* 
Objects and arrays are passed by reference.Primitive values like number, string, boolean 
are passed by value.A reference to an object is also a primitive type and passed by value 
like other primitive types, but the object it refers to is still passed by reference.

This is just how Javascript works.

example:

1) Pass By Value(primitives)

let a = 5
let b = a

console.log(a) // => 5
console.log(b) // => 5

a = 1

console.log(a) // => 1
console.log(b) // => 5

2) Pass by Reference(objects)

let a = {
    language: "Javascript"
}
let b = a

console.log(a) // => {language: "Javascript"}
console.log(b) => {
    language: "Javascript"
}

a.language = "Ruby"

console.log(a) // => {language: "Ruby"}
console.log(b) // => {language: "Ruby"}


*/