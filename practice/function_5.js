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
//         if (arr[i] <= 0) {
//             newArr[newArr.length] = 20;
//         } else {
//             newArr[newArr.length] = arr[i] / 2 + 5;
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

/****    6     ****/

// count = 0;
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

