"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function() {
        return this.name + " " + this.surname;
    };
}

/*********************************/

function Seat(category, number) {
    if (number === undefined) {
        number = Math.floor(10 + Math.random() * 90);
    }
    if (category === undefined) {
        category = "e";
    }
    this.number = number;
    this.category = category;
    this.getData = function() {
        return this.number + ", " + this.category.toUpperCase();
    };
}

/*************************************/

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function() {
        return this.seat.getData() + ", " + this.person.getData();
    };
}

/*************************************/

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengers = [];
    this.addPassenger = function(passenger) {
        this.passengers.push(passenger);
    };
    this.getData = function() {
        var str = "";
        for (var i = 0; i < this.passengers.length; i++) {
            str += this.passengers[i].getData() + "\n\t\t\t";
        }
        return this.date + ", " + this.relation + "\n\t\t\t" + str;
    };
}

/********************************************/

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function(flight) {
        this.listOfFlights.push(flight);
    };
}

/********************************************/

function createFlight(relation, date) {
    return {
        relation: relation,
        date: date
    };
}

function createPassenger(name, surname, seat, category) {
    return {
        name: name,
        surname: surname,
        seat: seat,
        category: category
    };
}

/*******************************************************/

var traveler1 = createPassenger("Michael", "Jordan", 34, "b");
var treaveler2 = createPassenger("Lionel", "Messi", 11, "b");
var traveler3 = createPassenger("LeBron", "James", 15, "e");
var traveler4 = createPassenger("Novak", "Djokovic", 1, "e");

var bgNy = createFlight("Beograd - New York", "17.03.2020.");
var bgBar = createFlight("Beograd-Barcelona", "25.03.2020.");

var osoba1 = new Person("Nenad", "Dimitrijevic");
var osoba2 = new Person("Petar", "Petrovic");
var osoba3 = new Person("Jovan", "Jovanovic");

var sediste1 = new Seat();
var sediste2 = new Seat("b", 2);
var sediste3 = new Seat("e");

var putnik1 = new Passenger(osoba1, sediste1);
var putnik2 = new Passenger(osoba2, sediste2);
var puntik3 = new Passenger(osoba3, sediste3);

var avioLet = new Flight("Beograd - Paris", "04.03.2020");

var aerodorom = new Airport();

avioLet.addPassenger(putnik1);
avioLet.addPassenger(putnik2);
avioLet.addPassenger(puntik3);

aerodorom.addFlight(avioLet);
aerodorom.addFlight(bgNy);
aerodorom.addFlight(bgBar);

console.log(aerodorom.listOfFlights);