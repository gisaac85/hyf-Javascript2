const animals = [{
        "name": "hedgehog",
        "size": "small",
        "weight": 500
    },
    {
        "name": "meercat",
        "size": "small",
        "weight": 730
    },
    {
        "name": "capricorn",
        "size": "medium",
        "weight": 1000
    },
    {
        "name": "mammoth",
        "size": "big",
        "weight": 8000
    }
]
//1.1 Create a new array animalNames, using a for-loop that contains the names of all the animals.
let animalNames = [];
for (let k in animals) {
    animalNames.push(animals[k].name);
}
console.log(animalNames);

//1.2 Now create another array do the same only using map.
let animalMapNames = [];
animalMapNames = animals.map(function (e) {
    e = e.name;
    return e;
});
console.log(animalMapNames);

//1.3 Create an array smallAnimals that only contains the animals which are small, using a for-loop
let smallAnimals = [];
for (let j in animals) {
    if (animals[j].size == "small") {
        smallAnimals.push(animals[j].name);
    }
}
console.log(smallAnimals);

//1.4 Now do the same only use the filter() method to achieve this.
let smallFilterAnimals = [];
smallFilterAnimals = animals.filter(function (el) {
    return (el.size === "small");
});

console.log(smallFilterAnimals);

//Bonus:
/*2. To Binary (Bonus)
Implement a function that adds two binary numbers together(in string representation)and outputs the sum of these bumpers as a binary string for example:

addBinary('00101101', '01001110'); //should output the sum of the two given binary numbers*/
function addTwoBinaries(a, b) {

    let carry = 0;
    let result = "";

    let i = 0;
    let j = 0;

    while (i <= a.length - 1 || j <= b.length - 1) {

        let num1 = i < 0 ? 0 : a[i] | 0;
        let num2 = j < 0 ? 0 : b[j] | 0;
        carry += num1 + num2; // sum of the two single digits
        result = carry % 2 + result; //concat string in proper order
        carry = carry / 2 | 0; // remove fractionals
        i++;
        j++;
    }

    if (carry) {
        result = carry + result;
    }
    return result;
}

console.log(addTwoBinaries("10", "01"));


///////////// END /////////////// 

///////////// THANKS MAARTJE //////////////