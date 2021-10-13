"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genries: [],
    privat: false
};

for (let i = 0; i < 2; i++ ) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != '' && b != '' && a.length <= 50 && a != null && b != null) {
        personalMovieDB.movies[a] = b;
        console.log('Готоао');
    } else {
        console.log('Облом');    
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Вы просмотрели мало фильмов');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
}
else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}
else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);