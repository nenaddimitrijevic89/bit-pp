/****   1    ****/

// function duplicate(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]);
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// var result = duplicate([2, 4, 7, 11, -2, 1]);
// console.log(result);

/****   2   ****/

// var removeDuplicate = function (arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr.sort(function (a, b) { return a - b });
// }

/****   2 drugi nacin   ****/

// var removeDuplicate = function (arr) {
//     arr.sort(function (a, b) { return a - b });

//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (newArr[newArr.length - 1] !== arr[i]) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }
// console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/****   3   ****/

//a

// var isOdd = function (arr) {
//     if (arr.length % 2 === 1) {
//         return true;
//     } else {
//         return false;
//     }

//     //return arr.length % 2 === 1;
// }
// console.log(isOdd([1, 2, 9, 2, 1]));

//b

// var lessThanMidd = function (arr) {
//     if (arr.length % 2 === 0) {
//         return "Error";
//     }
//     var count = 0;
//     var middle = arr[parseInt(arr.length / 2)];
//     for (var i = 0; i < arr.length; i++) {
//         if (middle > arr[i]) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(lessThanMidd([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/****   4    ****/

// var findSmallest = function (arr) {
//     var min = arr[0];
//     for (var i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     var obj = { minValue: min, lastMinIndex: arr.lastIndexOf(min) }
//     return obj;

// };
// console.log(findSmallest([1, 4, -2, 11, 8, 1, -2, 3]));

/****    5    ****/

//a

// var findSmaller = function (arr, el) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < el) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(findSmaller([2, 3, 8, -2, 11, 4], 6));

//b

// var findWord = function (arr) {
//     var b = "pro";
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (b === arr[i].toLowerCase().slice(0, 3)) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(findWord(["javascript", "product", "Programming"]));

//c

/****   6    ****/

// var cart = [{ name: "apples", price: 100 },
// { name: "milk", price: 80 },
// { name: "bananas", price: 150 }]
// function calculatePrice(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i].price;
//     }
//     return sum;
// }
// var price=calculatePrice(cart);

// var cart = [{ name: "apples", price: 100 },
// { name: "milk", price: 80 },
// { name: "bananas", price: 150 }]
// function calculateAverPrice(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i].price;
//     }
//     return sum / arr.length;
// }
// console.log(calculateAverPrice(cart))

// var cart = [{ name: "apples", price: 100 },
// { name: "milk", price: 80 },
// { name: "bananas", price: 150 }]

// function mostExpensive(arr) {
//     var max = arr[0].price;
//     var maxName = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (max < arr[i].price) {
//             // max = arr[i].price;
//             maxName = arr[i].name;
//         }
//     }
//     return maxName.toUpperCase();
// }
// console.log(mostExpensive(cart))

/****    7    ****/

//a

// function isUpper(str) {
//     if (str === str.toUpperCase()) {
//         return true;
//     }
//     return false;
// }
// var res = isUpper("doktor");
//console.log(res);

//b

// var hasDigits = function(str) {
//     for (var i = 0; i < str.length; i++) {
//         if (!isNaN(parseFloat(str[i]))) {
//             return true;
//         }
//     }
//     return false;
// };
//console.log(hasDigits("doktori1hirurgija"));

//c

// var isHexa = function(str) {
//     var a = parseInt(str, 16);
//     if (a.toString(16) === str) {
//         return true;
//     }
//     return false;
// };
//console.log(isHexa("aaf0ff"));

//c

// var isBetween = function(numb) {
//     if (numb >= 1900 && numb <= 2020) {
//         return true;
//     }
//     return false;
// };
//console.log(isBetween(2020));

//d

// var validator = function(name, password, color, year) {
//     var a = isUpper(name);
//     var b = hasDigits(password);
//     var c = isHexa(color);
//     var d = isBetween(year);
//     return {
//         stringValidator: a,
//         passwordValidator: b,
//         colorValidator: c,
//         yearValidator: d
//     };
// };
// console.log(validator("Nenad", "nenad1", "aaffff", 1997));

/****    11    ****/

//a

// var randomNumb = function() {
//     return Math.floor(5 + Math.random() * 15);
// };
// console.log(randomNumb());

//b

// var randomInteger = function() {
//     return Math.floor(50 + Math.random() * 50);
// };
// console.log(randomInteger());

//c

// var createArrOfNumbers = function(numb, callf) {
//     var newArr = [];
//     for (var i = 0; i < numb; i++) {
//         newArr.push(randomInteger());
//     }
//     return newArr;
// };
// console.log(createArrOfNumbers(15));

/****    12    ****/

// var shuffle = function(array) {
//     return array.sort(() => Math.random() - 0.5);
// };
// console.log(shuffle([1, 2, 3, 4, 5]));