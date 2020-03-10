"use strict";

/****   1    ****/

// var hasDigit=(function(str){
//     for(var i=0; i<str.length; i++){
//         if(str[i]==5){
//             return true;
//         }
//     }
//     return false;
// })("1b895abd”")

// console.log(hasDigit);

/****   2   ****/

// var replaceLetter = (function(str) {
//   var newStr = str.replace(/JS/g, "**");
//   return newStr;
// })("Programming in JS is super JS interesting");

// console.log(replaceLetter);

/****   3   ****/

// var insertCharacter = (function(str, el, p) {
//   var newStr = "";
//   for (var i = 0; i < str.length; i++) {
//     if (i === p) {
//       newStr += el;
//     }
//     newStr += str[i];
//   }
//   return newStr;
// })("Goo morning", "d", 3);
// console.log(insertCharacter);

/****    4   ****/

// var deleteCharacter = (function(str, p) {
//   var newStr = "";
//   for (var i = 0; i < str.length; i++) {
//     if (i === p) {
//       continue;
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// })("Goodd morning", 3);

// console.log(deleteCharacter);

/****    5    ****/

// var deleteEverySecond = (function (arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// })([3, 5, 1, 8, 90, -4, 23, 1, 67])

// console.log(deleteEverySecond);

/****    6    ****/

// var doubledElements = (function (arr, num1, num2) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (i > 1 && i < 7) {
//             newArr.push(arr[i] * 2)
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// })([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6);

// console.log(doubledElements);

/****    7    ****/

// var hasProperty = (function (obj, prop, val) {
//     if (obj.hasOwnProperty(prop) && obj[prop] === val) {
//         return true;
//     }
//     return false;
// })({ "x": 20, "y": 30 }, "y", 30)

// console.log(hasProperty)