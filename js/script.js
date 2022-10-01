"use strict";

let numberOfFilms = +prompt('Скыльки фільмыв ви вже поживилися?', "");
const personalMovieDB = {
count: numberOfFilms,
movies: {}, 
actors: {}, 
genres: [],
privat: false
};
let lastMuvie = prompt('Один з останніх переглядаємих фільмів?', ""),
    rating = prompt('На скільки оціните його?', ""),
    lastMuvie1 = prompt('Один з останніх переглядаємих фільмів?', ""),
    rating1 = prompt('На скільки оціните його?', "");

    personalMovieDB.movies [lastMuvie] = [rating];
    personalMovieDB.movies [lastMuvie1] = [rating1];
 
console.log(personalMovieDB);
