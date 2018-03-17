//Step 5: Scope and Closures

//1.Write a function that would allow you to do this:

function createBase(num) {
    return function (base) {
        return num + base;
    };
}

let addSix = createBase(6);
console.log(addSix(4)); //10
console.log(addSix(5)); //11

let addSeven = createBase(7);
console.log(addSeven(7)); //14
console.log(addSeven(10)); //17


//2.Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] 
//and returns an array which only has unique values in it(so it removes the duplicate ones).
//Make it a 'smart' algorithm that could do it for every array(only strings / number).
//Try to make it as fast as possible!

let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
let newArr = [1, 2, 3, 3, 4, 4, 5, 5, 6];

let uniqArr = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}

console.log(uniqArr(arr));
console.log(uniqArr(newArr));