"use strict";
(function () {
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
    this.listOfPlayers = [];
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
    AUSTRALIA: "AU"
  });

  Person.prototype.getData = function () {
    var day = this.dateOfBird.getDate();
    var month = this.dateOfBird.getMonth() + 1;
    var year = this.dateOfBird.getFullYear();
    return (
      this.name +
      " " +
      this.surname +
      ", " +
      day +
      "." +
      month +
      "." +
      year +
      "."
    );
  };

  Person.prototype.getYearsOld = function () {
    var year = this.dateOfBird.getFullYear();
    var today = new Date().getFullYear();
    return today - year;
  };

  Address.prototype.getData = function () {
    return (
      this.street +
      " " +
      this.number +
      ", " +
      this.postalCode +
      " " +
      this.city +
      ", " +
      this.country.name.slice(0, 3).toUpperCase()
    );
  };

  Player.prototype.getData = function () {
    return (
      this.country.name.slice(0, 3).toUpperCase() +
      ", " +
      this.betAmount.toFixed(2) +
      ", " +
      this.person.name +
      " " +
      this.person.surname +
      ", " +
      this.person.getYearsOld() +
      " years"
    );
  };

  BettingPlace.prototype.addPlayers = function (player) {
    this.listOfPlayers.push(player);
    this.numberOfPlayers++;
  };

  BettingHouse.prototype.addbettingPlaces = function (place) {
    this.listOfBettingPlace.push(place);
    this.numberOfPlayers += place.numberOfPlayers;
  };

  BettingHouse.prototype.getData = function () {
    return (
      this.competition +
      ", " +
      this.listOfBettingPlace.length +
      " betting places, " +
      this.numberOfPlayers +
      " bets\n"
    );
  };

  var createPlayer = function (
    name,
    surname,
    dateOfBird,
    countryName,
    odds,
    continent,
    bet
  ) {
    var per = new Person(name, surname, dateOfBird);
    var coun = new Country(countryName, odds, continent);
    return new Player(per, bet, coun);
  };

  var createBettingPlace = function (country, city, postalCode, street, number) {
    var add = new Address(country, city, postalCode, street, number);
    return new BettingPlace(add);
  };

  var countryOne = new Country("Serbia", 1.5, CONTINENT.EUROPE);
  var personOne = new Person("Nenad", "Dimitrijevic", "01/23/89");
  var playerOne = new Player(personOne, 5000, countryOne);
  var addressOne = new Address(
    countryOne,
    "Belgrade",
    11000,
    "Kneza Milosa",
    18
  );
  var bettingPlaceOne = new BettingPlace(addressOne);
  var bettingHouseOne = new BettingHouse("Football World Cup Winner");

  var playerTwo = createPlayer(
    "Nikola",
    "Mitic",
    "01/05/1995",
    "Serbia",
    1.7,
    CONTINENT.EUROPE,
    6000
  );

  var bettingPlaceTwo = createBettingPlace(
    countryOne,
    "Cuprija",
    35230,
    "Orasacka",
    14
  );

  bettingPlaceOne.addPlayers(playerOne);
  bettingPlaceOne.addPlayers(playerTwo);
  bettingPlaceTwo.addPlayers(playerOne);
  bettingPlaceTwo.addPlayers(playerTwo);

  bettingHouseOne.addbettingPlaces(bettingPlaceOne);
  bettingHouseOne.addbettingPlaces(bettingPlaceTwo);

  console.log(bettingHouseOne.getData());
  console.log();
})();
