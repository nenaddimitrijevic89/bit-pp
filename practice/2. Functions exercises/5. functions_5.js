/****   1    ****/
// var array = [3, 500, 12, 149, 53, 414, 1, 19];
// function switchMinAndMax(arr) {
//     var min = arr[0];
//     var max = arr[0];
//     var newArr = [];
//     var countMin = 0;
//     var countMax = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             countMax = i;
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//             countMin = i;
//         }
//         newArr[newArr.length] = arr[i]
//     }
//     newArr[countMax] = min;
//     newArr[countMin] = max;
//     return newArr;
// }

// console.log(switchMinAndMax(array));

/****   1  drugi nacin    ****/

// var array = [3, 500, 12, 149, 53, 414, 1, 19];
// function switchMinAndMax(arr) {
//     var minIndex = 0;
//     var maxIndex = 0;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }

//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//     }

//     var a = arr[minIndex];
//     arr[minIndex] = arr[maxIndex];
//     arr[maxIndex] = a;

//     return arr;
// }

// console.log(switchMinAndMax(array));

/****    2    ****/

// function divideAndAdd(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArr[newArr.length] = arr[i] / 2 + 5;
//         if (newArr[i] === 0) {
//             newArr[i] = 20;
//         }
//     }
//     return newArr;
// }
// var result = divideAndAdd([3, 500, -10, 149, 53, 414, 1, 19]);
// console.log(result);

/****    3    ****/

// var students = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
// var points = [50, 39, 63, 72, 99, 51, 83, 59];
// function grades(arr, arr1) {
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i] >= 51 && arr1[i] <= 60) {
//             console.log(arr[i] + " acquired " + arr1[i] + " points and earned 6")
//         }
//         if (arr1[i] >= 61 && arr1[i] <= 70) {
//             console.log(arr[i] + " acquired " + arr1[i] + " points and earned 7")
//         }
//         if (arr1[i] >= 71 && arr1[i] <= 80) {
//             console.log(arr[i] + " acquired " + arr1[i] + " points and earned 8")
//         }
//         if (arr1[i] >= 81 && arr1[i] <= 90) {
//             console.log(arr[i] + " acquired " + arr1[i] + " points and earned 9")
//         }
//         if (arr1[i] >= 91 && arr1[i] <= 100) {
//             console.log(arr[i] + " acquired " + arr1[i] + " points and earned 10")
//         }
//         if (arr1[i] <= 50) {
//             console.log(arr[i] + " acquired " + arr1[i] + " points failed to complete the exam")
//         }
//     }
// }
// grades(students, points);

/****   4    ****/

// var arr = [13, 11, 15, 5, 6, 1, 8, 12];

// var sortedArr = function(array) {
//     var newArr = array.sort((a, b) => a - b);
//     return newArr.map(el => el * 2);
// }
// console.log(sortedArr(arr))

/****    5    ****/

// var arr = [13, 11, 15, 5, 6, 1, 8, 12];

// var reversedSortedArr = function(array) {
//     return array.sort((a, b) => b - a);
// }
// console.log(reversedSortedArr(arr));

// /****    6     ****/

// var count = 0;
// for (var i = 0; i < 1001; i++) {
//     if (i % 2 === 0) {
//         count += i;
//     }
//     if (i < 501 && i % 2 === 1) {
//         count -= i;
//     }
// }
// count = count * 12.5;
// console.log(count)

/****   7   ****/

// var array = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

// var firstTwo = function (arr) {
//     var newStr = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string" && arr[i].length > 1) {
//             newStr += arr[i][0];
//             newStr += arr[i][1]
//         }

//     }
//     return newStr;
// }
// console.log(firstTwo(array));

/****   8    ****/

// var reverseString = function(str) {
//     var newStr = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// };
// console.log(reverseString("Belgrade Institute for Technology"));

/****    9   ****/

// var combinations = function() {
//     for (var i = 1; i <= 7; i++) {
//         for (var j = 7; j >= 1; j--) {
//             if (i === j) {
//                 continue;
//             } else {
//                 console.log(i, j);
//             }
//         }
//     }
// };
// combinations();

/****   10   ****/

// var isPrime = function(numb) {
//     for (var i = 2; i < numb; i++) {
//         if (numb % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPrime(5));

/****   11   ****/

// var isPalindrome = function(str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPalindrome("anavolimilovana"));