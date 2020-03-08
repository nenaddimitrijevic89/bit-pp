"use strict";

function Genre(name) {
    this.name = name;
    this.getData = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumbOfMovies;
    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.totalNumbOfMovies = this.listOfMovies.length;
    }
    this.getData = function () {
        var str = "\t";
        var lengthOfAllMovies = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            str += this.listOfMovies[i].getData() + "\n\t";
            lengthOfAllMovies += this.listOfMovies[i].length;
        }
        return this.date + ", " + lengthOfAllMovies + "\n" + str;
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies;
    this.addProgram = function (program) {
        this.listOfPrograms.push(program);

    }
    this.getData = function () {

    }
}

var horror = new Genre("Horror");
var action = new Genre("action");
var drama = new Genre("drama");

var firstMovie = new Movie("Sparta", action, 115);
var secondMovie = new Movie("Taxi driver", drama, 120);

var firstProgram = new Program("06/03/20");
firstProgram.addMovie(firstMovie);
firstProgram.addMovie(secondMovie);
console.log(firstProgram.getData());