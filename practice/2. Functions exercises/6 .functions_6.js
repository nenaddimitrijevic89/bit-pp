"use strict";

/****     1    ****/

// var countVowels = function(str) {
//     var count = 0;
//     var a = str.toUpperCase();
//     for (var i = 0; i < str.length; i++) {
//         if (
//             a[i] === "A" ||
//             a[i] === "E" ||
//             a[i] === "I" ||
//             a[i] === "O" ||
//             a[i] === "U"
//         ) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countVowels("nenad"));

/****     2    ****/

// var result = (function() {
//     var arr1 = ["a", "b", "c"];
//     var arr2 = [1, 2, 3];
//     var newArr = [];
//     for (var i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
//         newArr.push(arr1[i]);
//         newArr.push(arr2[j]);
//     }
//     return newArr;
// })();
// console.log(result);

/****     3    ****/

// var result = (function() {
//     var arr = [1, 2, 3, 4, 5, 6];
//     var a = arr.slice(2);
//     var b = arr.slice(0, 2);
//     var newArr = a.concat(b);

//     return newArr;
// })();
// console.log(result);

/****     4    ****/

// var result = (function() {
//     var number = 123;
//     var newArr = [];
//     var a = number.toString(10).split("");
//     for (var i = 0; i < a.length; i++) {
//         newArr.push(parseFloat(a[i]));
//     }
//     return newArr;
// })()
// console.log(result);

/****    4 sa ostatkom   ****/

// var result = (function() {
//     var number = 123.45;
//     var final = [];
//     var a = number.toString();
//     for (var i = 0; i < a.length; i++) {
//         var val = parseFloat(a[i]);
//         if (!isNaN(val)) {
//             final.push(val)
//         }
//     }

//     return final;
// })();
// console.log(result);

/****   5     ****/

// var result = (function () {
//     for (var i = 1; i < 13; i++) {
//         for (var j = 1; j < 13; j++) {
//             console.log(i + "*" + j + "=" + i * j)
//         }
//     }
// })();

/****   6    ****/

// var result = (function (c) {
//     var fahrenheit = c * 9 / 5 + 32;
//     return fahrenheit;
// })(36);
// console.log(result);

/****   7     ****/

// var result = (function() {
//     var arr = [1, 10, "n", 5, "b"];
//     var newArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             newArr.push(arr[i]);
//         }
//     }
//     return Math.max(...newArr);
// })();
// console.log(result);

/****    8     ****/

// let arr = [10, 1, 15, 200, 120, 2, 7];

// (function(a) {
//     arr.sort((a, b) => a - b);
//     let min = arr[0];
//     let max = arr[arr.length - 1];

//     console.log(min, max);
// })();

/****   9    ****/

// let middleNum = (function(arr) {
//     if (arr.length % 2 === 1) {
//         return (arr[Math.ceil(arr.length / 2 - 1)]);
//     } else {
//         return false;
//     }
// })([10, 1, 15, 200, 120, 2, 7]);
// console.log(middleNum);


/****    10    ****/

// let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// let mostFrequent = function(arr) {
//     return arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop();
// };

// console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

/****   11   ****/

// let arr = [12, 1, 5, 15, 7, 15, 16];

// let result = (function(a) {
//     if (a.length === 0) {
//         return a;
//     }
//     let middle = arr[Math.ceil([arr.length / 2]) - 1];
//     return [a[0], middle, a[a.length - 1]];
// })(arr);

// console.log(result);

/****   12   ****/

// let average = function() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum / arguments.length;
// };

// console.log(average(4, 5, 10, 15));

/****   13   ****/

// let greaterThanAvg = (function(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     sum = sum / arr.length;
//     let newArr = arr.filter(element => element > sum);
//     return newArr;
// })([1, 3, 2, 1, 5, 7, 10, 4, 1]);

// console.log(greaterThanAvg);

/****    14    ****/

// let calulateBmi = function(weight, height) {
//     let bmi = (function(weight, height) {
//         return weight / (height * height);
//     })(weight, height);
//     if (bmi >= 40) {
//         return `Morbidly obese, bmi (${bmi})`;
//     } else if (bmi < 40 && bmi >= 30) {
//         return `Obese, bmi (${bmi})`;
//     } else if (bmi < 30 && bmi >= 25) {
//         return `Overweight, bmi (${bmi})`;
//     } else if (bmi < 25 && bmi >= 18.5) {
//         return `Ideal, bmi (${bmi})`;
//     } else if (bmi < 18.5 && bmi >= 17.5) {
//         return `Underweight, bmi (${bmi})`;
//     } else if (bmi < 17.5 && bmi >= 15) {
//         return `Anorexic, bmi (${bmi})`;
//     } else {
//         return `Starvation, bmi (${bmi})`;
//     }
// };
// console.log(calulateBmi(130, 1.6));

/****    15    ****/

// let printFrame = (function(arr) {
//     function fill(str, length, char) {
//         return (str.length < length) ? fill(str + char, length, char) : str;
//     }

//     let size = arr.map((str) => {
//             return str.length;
//         })
//         .reduce((a, b) => {
//             return Math.max(a, b);
//         });

//     let line = fill('', size + 4, '*');

//     arr = arr.map((element) => {
//         return '* ' + fill(element, size, ' ') + ' *';
//     })
//     arr.unshift(line);
//     arr.push(line);

//     return arr.join('\n');;
// })(["Hello", "World", "in", "a", "frame"])

// console.log(printFrame);