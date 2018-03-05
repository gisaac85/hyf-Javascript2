/* Copyright (C) All rights reserved for ISAAC */

// Custom DOM manipulation challenge 🎓

/*
1.Open a new js file and start
 * by declaring an array that contains 10 strings.
These strings should be of
 * book titles you have read (or made up)
and be lowercase without spaces or
 * special characters so that you can use these later as Id's.
(Example: Harry
 * Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
 */
// 2.Create a basic html file called index.html and use it to load the js
// file,confirm the console.log show the array. (This is for debugging and
// making sure everything is in order. Delete it later when you're done :))

// 3.Make a function (or functions) that generate a ul with li elements for each
// book ID in the array using a for loop.

let bookTitles = [
    "one_hundred_years_of_solitude",
    "love_in_the_time_of_cholera",
    "taras_bulba",
    "the_overcoat",
    "Season_of_migration_to_the_north",
    "azazel",
    "a_tale_of_two_cities",
    "the_prophet",
    "the_general_in_his_labyrinth",
    "les_miserables"
];

// function to print BookID values
function printList() {
    let ul2 = document.createElement("ul");
    for (i = 0; i < bookTitles.length; i++) {
        let li1 = document.createElement("li");
        li1.textContent += (bookTitles[i].toUpperCase().replace(/_/g, ' ').toUpperCase());
        ul2.appendChild(li1);

    }

    document.getElementById("titles").appendChild(ul2);

}

printList();

// 4.Make an object containing information for each book. Each item (object) in
// this object should have the book ID you thought up in point 1 as a key, and
/* // it should have at least the following fields: title, language and author.
 * ow change the function you used to display the book ID's in a list to take
 * the actual information about the book from the object and display that. Make
 * sure you choose the right html elements for each piece of info, for instance,
 * a heading for the title.

Beautify your html page with css, add sources and
 * alts to each of the images.
 */
let books = {

    one_hundred_years_of_solitude: {
        'title': "One Hundered Years Of Solitude",
        'language': "Spanish",
        'author': "Gabriel Garcia Markiz"
    },
    love_in_the_time_of_cholera: {
        'title': "Love in the Time of Cholera",
        'language': "Spanish",
        'author': "Gabriel Garcia Markiz"
    },
    taras_bulba: {
        'title': "Taras Bulba",
        'language': "Russian",
        'author': "Gogol"
    },
    the_overcoat: {
        'title': "The Overcoat",
        'language': "Russian",
        'author': "Gogol"
    },
    season_of_migration_to_the_north: {
        'title': "Season of migration to the North",
        'language': "Arabic",
        'author': "Alteb Saleh"
    },
    azazel: {
        'title': "azazel",
        'language': "Arabic",
        'author': "Youssef Ziedan"
    },
    a_tale_of_two_cities: {
        'title': "A Tale of two cities",
        'language': "English",
        'author': "Charles Dekinz"
    },
    the_prophet: {
        'title': "The Prophet",
        'language': "Arabic",
        'author': "Jubran Khalil Jubran"
    },
    the_general_in_his_labyrinth: {
        'title': "The General in his labyrinth",
        'language': "Spanish",
        'author': "Gabriel Garcia Markiz"
    },
    les_miserables: {
        'title': "Les miserables",
        'language': "French",
        'author': "Vector Hugo"
    }

};

// for loop to read fields of every object(item) in books object
let ul1 = document.createElement("ul");
<<<<<<< HEAD
ul1.className = "ul-tab"; //Add CSS class to DOM object
=======
 ul1.className = "ul-tab"; //Add CSS class to DOM object

>>>>>>> 10ad8d6e7220abe9a62c8d147cf3e4a32dea9906
for (let key in books) {

    let li = document.createElement("li");
    li.id = key;
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let em = document.createElement('em');

    em.textContent += (books[key].title);
    li.appendChild(h1).appendChild(em);
    h2.textContent += (books[key].author);
    li.appendChild(h2);
    h3.textContent += (books[key].language);
    li.appendChild(h3);
    li.className = "li-tab"; //Add CSS class to DOM object
<<<<<<< HEAD

=======
   
>>>>>>> 10ad8d6e7220abe9a62c8d147cf3e4a32dea9906
    ul1.appendChild(li);



}
document.getElementById("moreinfo").appendChild(ul1);

/* 7.Download book covers for each book, construct a new Object which has as
 * keys the bookId's again, and as value the path to the image source (e.g.
 * {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over
 * these entries (hint: Object.keys(objectName) gives you an array containing
 * the keys). Then write a function which places an image at the corresponding
 * li element. Remember that Objects are not ordered, so you cannot guarantee
 * that the first key is the first li element. (Hint: you could give each li
 * item an id tag by modifying the function you made before)
 */
let booksImages = {
    "one_hundred_years_of_solitude": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/hunderdyearofsolitude.jpeg",
    "love_in_the_time_of_cholera": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/loveincholeratime.jpeg",
    "taras_bulba": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/tarasbulba.jpg",
    "the_overcoat": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/theovercoat.jpg",
    "season_of_migration_to_the_north": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/migrationtonorth.jpg",
    "azazel": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/azazel.jpg",
    "a_tale_of_two_cities": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/ataleoftwocities.jpeg",
    "the_prophet": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/theprophet.jpg",
    "the_general_in_his_labyrinth": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/thegeneralinhislabyrinth.jpg",
    "les_miserables": "https://raw.githubusercontent.com/gisaac85/hyf-Javascript2/master/week1/images" +
        "/lesmiserables.jpg"

};
<<<<<<< HEAD
=======

>>>>>>> 10ad8d6e7220abe9a62c8d147cf3e4a32dea9906
// loop to get source image and link to each image
Object.keys(booksImages).forEach(function (key) {

    let li = document.getElementById(key);
    li.id = key;

    let a = document.createElement('a');
    let br = document.createElement('br');
    let tabStr = ":  ";

    a.textContent = booksImages[key];
    a.href = a.textContent;
    a.text = "Click to See Image's Cover";

    let bookCover = document.createElement('img');

    bookCover.src = booksImages[key];
    li.appendChild(bookCover);
    li.appendChild(a);

});

//for loop to add books' covers
/*
let ul = document.createElement("ul");
let em = document.createElement('em');
let h3 = document.createElement('h3');
let tabStr1 = ":   ";

for (let key in booksImages) {

    let li = document.createElement("li");
    li.id = key;
    let bookCover = document.createElement('img');
    li.textContent = key.replace(/_/g, ' ') + tabStr1;
    bookCover.src = booksImages[key];
    li.appendChild(bookCover);
    ul.appendChild(li);
}
<<<<<<< HEAD
*/
=======
*/
>>>>>>> 10ad8d6e7220abe9a62c8d147cf3e4a32dea9906
