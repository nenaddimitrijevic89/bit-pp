"use strict"

// (function () {
function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
}

function Person(name, surname, dateOfBird) {
    this.name = name;
    this.surname = surname;
    this.dateOfBird = new Date(dateOfBird);
}
function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}
function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
}
function BettingPlace(address) {
    this.address = address;
    this.listOfPlayer = [];
    this.numberOfPlayers = 0;
}
function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlace = [];
    this.numberOfPlayers = 0;

}
var CONTINENT = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",

});
Person.prototype.getData = function () {
    var day = this.dateOfBird.getDate();
    var month = this.dateOfBird.getMonth() + 1;
    var year = this.dateOfBird.getFullYear();
    return this.name + " " + this.surname + ", " + day + "." + month + "." + year + ".";
}

Address.prototype.getData = function () {
    return this.street + this.number + ", " + this.postalCode + this.city + ", "
}


var personOne = new Person("nenad", "dimitrijevic", "1/23/89")
console.log(personOne.getData());




    // })()