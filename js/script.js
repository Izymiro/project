'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,


};
//console.log(personalMovieDB.count);

let seeMovies = prompt('Один из последних просмотренных фильмов?', '');
let raitingMovies = prompt('На сколько оцените его?', '');

personalMovieDB.movies[seeMovies] = raitingMovies;

console.log(personalMovieDB);
