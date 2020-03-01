/****    1   ****/

// var isElementInArr = function (arr, el) {
//     for (var i = 0; i < arr.length; i++) {
//         if (el === arr[i]) {
//             return "Yes";
//         }
//     }
//     return "No";
// }
// console.log(isElementInArr([5, -4.2, 18, 7, 3], 3));

/****    2    ****/

// var multiplyPositiv = function (arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] <= 0) {
//             newArr[newArr.length] = arr[i];
//         } else {
//             newArr[newArr.length] = arr[i] * 2
//         }
//     }
//     return newArr;
// }
// console.log(multiplyPositiv([-3, 11, 5, 3.4, -8]));

/****    3    ****/

// var findMin = function (arr) {
//     var min = arr[0];
//     var index = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             index = i;
//         }
//     }
//     return [min, index];
// }
// console.log(findMin([-3, 11, 5, 3.4, -8]));

/****   4    ****/

// var findSecMin = function (arr) {
//     var min = arr[0];
//     var secMin = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             secMin = min;
//             min = arr[i];
//         }
//     }
//     return secMin;
// }
// console.log(findSecMin([5, -3, 11, 5, 1, -4, 0, 3, -8]));

/****   5    ****/

// var sumOfPositiv = function (arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumOfPositiv([-3, 11, 5, 3.4, -8]));

/****   6    ****/

// var isSymmetric = function (arr) {
//     var str = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[arr.length - 1 - i]) {
//             str = "The array is symmetric";
//         } else {
//             str = "The array is not symmetric";
//         }
//     }
//     return str;
// }
// console.log(isSymmetric([1, 2, 3, 3, 2, 1]))

/****   7   ****/

// var interTwins = function (arr1, arr2) {
//     var newArr = [];
//     for (var i = 0; i < arr1.length; i++) {
//         newArr[newArr.length] = arr1[i];
//         newArr[newArr.length] = arr2[i];
//     }
//     return newArr
// }
// console.log(interTwins([-3, 11, 5, 3, -8], [1, 2, 3, 4, 5]))

/****   8    ****/

// var concatArr = function (arr1, arr2) {
//     var newArr = [];
//     for (var i = 0; i < arr1.length; i++) {
//         newArr[i] = arr1[i];
//         newArr[arr1.length + i] = arr2[i];
//     }
//     return newArr;
// }
// console.log(concatArr([-3, 11, 5, 3.4, -8], [1, 2, 3, 4, 5]))

/****   9    ****/

// var deleteEl = function (arr, el) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== el) {
//             newArr[newArr.length] = arr[i];
//         }
//     }
//     return newArr;
// }
// console.log(deleteEl([-3, 11, 5, 3.4, -8], 3.4));

/****   10    ****/

// var insertEl = function (arr, el, p) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (i === p) {
//             newArr[p] = el;
//         }
//         newArr[newArr.length] = arr[i];
//     }
//     return newArr;
// }
// console.log(insertEl([-3, 11, 5, 3.4, -8], 100, 2));

