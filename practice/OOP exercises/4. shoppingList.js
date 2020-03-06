"use strict"



function Product(name, price, expirationDate) {
    var randomNumb = function () {
        return Math.floor(10000 + Math.random() * 89999);
    }
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(expirationDate);
    this.id = randomNumb();
    this.getInfo = function () {
        var nmid = (this.name.slice(0, 1) + this.name.slice(this.name.length - 1)).toUpperCase() + this.id;
        return nmid + ", " + this.name + ", " + this.price;
    }
}

function ShoppingBag() {
    this.productsList = [];

    this.addProduct = function (product) {
        if (product.expirationDate > new Date()) {
            this.productsList.push(product);
        }
    }
    this.averagePrice = function () {
        var averagePrice = 0;
        for (var i = 0; i < this.productsList; i++) {
            averagePrice += this.productsList[i].price;
        }
        return averagePrice / this.productsList
    }
}

var banana = new Product("Banana", 130.25, "01.26.2020")
var torba = new ShoppingBag()
torba.addProduct(banana);

console.log(torba.productsList)




