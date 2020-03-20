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

// var hasProperty = (function(obj, prop, val) {
//     if (obj.hasOwnProperty(prop) && obj[prop] === val) {
//         return true;
//     }
//     return false;
// })({ "x": 20, "y": 30 }, "x", 20)

// console.log(hasProperty)

/****    8    ****/

// const sameElements = (arr1, arr2) => {
//     let a = [...arr2];
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if (arr1[i] === a[j]) {
//                 newArr.push(a[j]);
//                 delete a[j];
//                 break;
//             }
//         }
//     }
//     if (newArr.length === arr1.length) {
//         return true;
//     }
//     return false;
// }
// console.log(sameElements([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

/****    10    ****/

// function calcNextDay(year, month, day) {
//     var date = new Date(year, month - 1, day);
//     var oneDay = 24 * 60 * 60 * 1000; //86 400 000 milliseconds in one day
//     console.log(date)
//     var nextDate = new Date(date.getTime() + oneDay);
//     console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
// }

// calcNextDay(2016, 9, 30);

/****   10 es6   ****/

// const calculateNextDay = (year, month, day) => {
//     const date = new Date(year, month - 1, day);
//     const oneDay = 24 * 60 * 60 * 1000;
//     const nextDay = new Date(date.getTime() + oneDay);
//     console.log(`${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`);
// }
// calculateNextDay(2020, 3, 20)

/****      11     ****/

// const calculatePreviousDay = (year, month, day) => {
//     const date = new Date(year, month - 1, day);
//     const oneDay = 24 * 60 * 60 * 1000;
//     const previousDay = new Date(date.getTime() - oneDay);
//     console.log(`${previousDay.getFullYear()}-${previousDay.getMonth()+1}-${previousDay.getDate()}`);

// }
// calculatePreviousDay(2020, 3, 20);