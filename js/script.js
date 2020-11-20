'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms.length <= 0) {
	alert('Пожалуйста введите что то');
	let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
} else if (numberOfFilms.length >= 50) {
	alert('Пожалуйста введите менее 50 символов');
	let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
} else {
	alert('Спасибо за ответ!');
};

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,


};
console.log(personalMovieDB['count']);
if (personalMovieDB['count'] < 10) {
	alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30 ) {
	alert('Вы классик зритель');
}else if (personalMovieDB['count'] >= 30) {
	alert('Вы киноман');
}else {
	alert('Произошла ошибка');
}

//let seeMovies = prompt('Один из последних просмотренных фильмов?', '');
//let raitingMovies = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[seeMovies] = raitingMovies;



//console.log(personalMovieDB);
