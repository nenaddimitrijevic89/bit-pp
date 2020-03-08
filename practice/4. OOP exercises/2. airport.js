function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
        return this.name + " " + this.surname;
    }
}

function Seat(number, category) {
    this.number = number || Math.round(10 + Math.random() * 90);
    this.category = category || 'e';

    this.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
        return seat.getData() + ", " + person.getData()
    }
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengers = [];

    this.addPassenger = function (passenger) {
        this.passengers.push(passenger);
    }

    this.getNumberOfPassengers = function () {
        return this.passengers.length;
    }

    this.getData = function () {
        var str = "";
        for (var i = 0; i < this.passengers.length; i++) {
            str += this.passengers[i].getData() + "\n\t\t\t";
        }
        return this.date + ", " + this.relation + "\n\t\t\t" + str;
    }
}

function Airport() {
    this.name = "Nikola Tesla";
    this.flights = [];

    this.addFlight = function (flight) {
        this.flights.push(flight);
    }

    this.getData = function () {
        var flightsData = '\t';
        var allPassengers = 0;
        for (var i = 0; i < this.flights.length; i++) {
            flightsData += this.flights[i].getData() + "\n\t";
            allPassengers += this.flights[i].getNumberOfPassengers();
        }

        return 'Airport: ' + this.name + ',\t total passengers:' + allPassengers + '\n\n' + flightsData;
    }
}

function createFlight(relation, date) {
    return new Flight(relation, date);
};

function createPassenger(name, surname, seatNumber, category) {
    var person = new Person(name, surname);
    var seat = new Seat(seatNumber, category)

    return new Passenger(person, seat);
}


var firstPassenger = createPassenger('Nikola', 'Mitic', 24, 'b');
var secondPassenger = createPassenger('Nenad', 'Dimitrijevic', 25, 'b');

var bgParis = createFlight("Belgrade - Paris", "25.10.2020");
var bgLondon = createFlight("Belgrade - London", "05.03.2020");
var bgKabul = createFlight("Belgrade - Kabul", "15.04.2020")

bgParis.addPassenger(firstPassenger);
bgParis.addPassenger(secondPassenger);

bgLondon.addPassenger(secondPassenger);
bgLondon.addPassenger(firstPassenger);

bgKabul.addPassenger(firstPassenger);
bgKabul.addPassenger(secondPassenger);

var nikolaTesla = new Airport();
nikolaTesla.addFlight(bgParis);
nikolaTesla.addFlight(bgLondon);
nikolaTesla.addFlight(bgKabul)

console.log(nikolaTesla.getData());
