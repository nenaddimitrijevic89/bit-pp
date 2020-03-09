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

// var result = (function () {
//     var arr1 = ["a", "b", "c"];
//     var arr2 = [1, 2, 3];
//     var newArr = [];
//     for (var i = 0, j = 0; i < arr1.length, j < arr2.length; i++ , j++) {
//         newArr.push(arr1[i]);
//         newArr.push(arr2[j]);
//     }
//     return newArr;
// })();
// console.log(result);

/****     3    ****/

// var result = (function () {
//     var arr = [1, 2, 3, 4, 5, 6];
//     var a = arr.slice(2);
//     var b = arr.slice(0, 2);
//     var newArr = a.concat(b);

//     return newArr;
// })();
// console.log(result);

/****     4    ****/

// var result = (function () {
//     var number = 123;
//     var newArr = [];
//     var a = number.toString(10).split("")
//     for (var i = 0; i < a.length; i++) {
//         newArr.push(parseFloat(a[i]));
//     }
//     return newArr;
// })()
// console.log(result);

/****    4 sa ostatkom   ****/

// var result = (function () {
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

// var result = (function () {
//     var arr = [1, 10, "n", 5, "b"];
//     var newArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             newArr.push(arr[i]);
//             var max = arr[i];
//             if (max < arr[i]) {
//                 max = arr[i];
//             }
//         }
//     }
//     return max;
// })()
// console.log(result);
