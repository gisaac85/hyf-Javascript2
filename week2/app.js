/* 
1. Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

Your solution could be something like this:

let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
Rewrite the above program using map and filter don't forget to use =>
*/


let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter(x => x % 2 !== 0).map(x => x * 2)

console.log("The doubled numbers are: " + newNumbers);


//Underneath you see a very interesting small insight in Maartje's work:

let monday = [{
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [{
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

//1.Collect two days' worth of tasks.

let tasks = monday.concat(tuesday);

let ul = document.createElement('ul');

for (let key in tasks) {
    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let h3 = document.createElement('h3');

    h3.textContent += 'Task Name: ' + tasks[key].name + ' ';
    h4.textContent += 'Task Duration: ' + tasks[key].duration + ' (min)';

    li.appendChild(h3);
    li.appendChild(h4);
    ul.appendChild(li);

}
document.getElementById('name').appendChild(ul);

//2.Convert the task durations to hours, instead of minutes.

let ul1 = document.createElement('ul');


Object.keys(tasks).map((key, index) => {
    tasks[key].duration /= 60; // from minutes into hours
});

for (let key in tasks) {


    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let h3 = document.createElement('h3');

    h3.textContent += 'Task Name: ' + tasks[key].name + ' ';
    h4.textContent += 'Task Duration: ' + tasks[key].duration + ' (hour)';

    li.appendChild(h3);
    li.appendChild(h4);
    ul1.appendChild(li);

}
document.getElementById("hour").appendChild(ul1);


//3.Filter out everything that took two hours or more (remove from the collection)
let ul2 = document.createElement('ul');

for (let key in tasks) {

    tasks = tasks.filter(key => {
        return key.duration < 2;
    });

    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let h3 = document.createElement('h3');

    if (tasks.hasOwnProperty(key)) {
        h3.textContent += 'Task Name: ' + tasks[key].name + ' ';
        h4.textContent += 'Task Duration: ' + tasks[key].duration + ' (hour)';

        li.appendChild(h3);
        li.appendChild(h4);
        ul2.appendChild(li);

    }
}
document.getElementById("lessTwo").appendChild(ul2);

//4.Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.
let ratePerHour = 10;
let newTasks = monday.concat(tuesday);

Object.keys(newTasks).map((key, index) => {
    newTasks[key].duration *= ratePerHour;
});
let sum = 0;

Object.keys(newTasks).map((key, index) => {
    sum += newTasks[key].duration;
    return sum;
});

let ul3 = document.createElement("ul");
let label = document.createElement("label");

for (let key in newTasks) {


    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let h3 = document.createElement('h3');

    h3.textContent += 'Task Name: ' + newTasks[key].name + ' ';
    h4.textContent += 'Task billing: ' + newTasks[key].duration + ' (Euro)';

    li.appendChild(h3);
    li.appendChild(h4);
    ul3.appendChild(li);

}
document.getElementById("per").appendChild(ul3);
label.textContent = "The Sum of All billing = " + sum + " Euro";
document.getElementById("sumOf").appendChild(label);



//5. Output a formatted Euro amount.

function moneyFormat(price, sign = ' €') {
    const pieces = parseFloat(price).toFixed(2).split('')
    let ii = pieces.length - 3
    while ((ii -= 3) > 0) {
        pieces.splice(ii, 0, ',')
    }
    return pieces.join('') + sign
}
let label1 = document.createElement("label");
label1.textContent = "The Sum of All billing (formatted) = " + moneyFormat(sum);
document.getElementById("format").appendChild(label1);