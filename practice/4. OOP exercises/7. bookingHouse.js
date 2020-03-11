"use strict";
(function () {
  const CONTINENT = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU"
  });

  class Country {
    constructor(name, odds, continent) {
      this.name = name;
      this.odds = odds;
      this.continent = continent;
    }
  }

  class Person {
    constructor(name, surname, dateOfBird) {
      this.name = name;
      this.surname = surname;
      this.dateOfBird = new Date(dateOfBird);
    }
    getData() {
      let day = this.dateOfBird.getDate();
      let month = this.dateOfBird.getMonth() + 1;
      let year = this.dateOfBird.getFullYear();
      return `${this.name} ${this.surname}, ${day}.${month}.${year}.`;
    };

    getYearsOld() {
      let year = this.dateOfBird.getFullYear();
      let today = new Date().getFullYear();
      return today - year;
    };
  }

  class Player {
    constructor(person, betAmount, country) {
      this.person = person;
      this.betAmount = betAmount;
      this.country = country;
    }
    getData() {
      return '\t\t' + this.country.name.slice(0, 3).toUpperCase() + ", " + this.betAmount.toFixed(2) + ", " + this.person.name + " " + this.person.surname + ", " + this.person.getYearsOld() + " years";
    };
  }

  class Address {
    constructor(country, city, postalCode, street, number) {
      this.country = country;
      this.city = city;
      this.postalCode = postalCode;
      this.street = street;
      this.number = number;
    }
    getData() {
      return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country.name.slice(0, 3).toUpperCase();
    };
    getFinalData() {
      return '\t' + this.street + ", " + this.postalCode + " " + this.city;
    }
  }

  class BettingPlace {
    constructor(address) {
      this.address = address;
      this.listOfPlayers = [];
      this.numberOfPlayers = 0;
      this.betSum = 0;
    }
    addPlayers(player) {
      this.listOfPlayers.push(player);
      this.numberOfPlayers++;
      this.betSum += player.betAmount;
    };
    getData() {
      let playerData = "";
      this.listOfPlayers.forEach(element => {
        playerData += element.getData() + "\n";
      });
      return playerData;
    }
  }

  class BettingHouse {
    constructor(competition) {
      this.competition = competition;
      this.listOfBettingPlace = [];
      this.numberOfPlayers = 0;
    }
    addbettingPlaces(place) {
      this.listOfBettingPlace.push(place);
      this.numberOfPlayers += place.numberOfPlayers;
    };
    getData() {
      let bettingHouseData = `${this.competition}, ${this.listOfBettingPlace.length} betting places, ${this.numberOfPlayers} bets`;
      let addressAndPlayersData = "";
      this.listOfBettingPlace.forEach(element => {
        let addressData = `\n${element.address.getFinalData()}, sum of all bets: ${element.betSum}`;
        let playersData = `\n${element.getData()}`;
        addressAndPlayersData += (addressData + playersData);
      });
      return `${bettingHouseData}\t${addressAndPlayersData}`;
    }
  }

  let createPlayer = function (name, surname, dateOfBird, countryName, odds, continent, bet) {
    let per = new Person(name, surname, dateOfBird);
    let coun = new Country(countryName, odds, continent);
    return new Player(per, bet, coun);
  };

  let createBettingPlace = function (country, city, postalCode, street, number) {
    let add = new Address(country, city, postalCode, street, number);
    return new BettingPlace(add);
  };


  let playerOne = createPlayer("Nenad", "Dimitrijevic", "01/23/89", "Serbia", 1.5, CONTINENT.EUROPE, 5000);
  let playerTwo = createPlayer("Nikola", "Mitic", "01/05/1995", "Serbia", 1.7, CONTINENT.EUROPE, 6000);

  let bettingPlaceTwo = createBettingPlace("Serbia", "Cuprija", 35230, "Orasacka", 14);
  let bettingPlaceOne = createBettingPlace("Serbia", "Belgrade", 11000, "Kneza Milosa", 18);
  let bettingHouseOne = new BettingHouse("Football World Cup Winner");

  bettingPlaceOne.addPlayers(playerOne);
  bettingPlaceOne.addPlayers(playerTwo);
  bettingPlaceTwo.addPlayers(playerOne);
  bettingPlaceTwo.addPlayers(playerTwo);

  bettingHouseOne.addbettingPlaces(bettingPlaceOne);
  bettingHouseOne.addbettingPlaces(bettingPlaceTwo);

  console.log(bettingHouseOne.getData())
})();