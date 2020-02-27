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
