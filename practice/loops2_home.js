/***************     1       **********************/

// var arr = [5, -4.2, 3, 7];
// var e = 3;
// var result = "no";
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === e) {
//         result = "yes";
//     }
// }
// console.log(result);

/**************       2       ************************/

// var arr = [-3, 11, 5, 3.4, -8];
// var b = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         b[i] = arr[i] * 2;
//     } else {
//         b[i] = arr[i];
//     }
// }
// console.log(b);

/***************       3         **********************/

// var arr = [4, 2, 2, -1, 6];
// var min = arr[0];
// var index = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         index = i;
//     }
// }
// console.log(min, index);

/***************        4         ********************/

// var arr = [4, 2, 2, -2, -2, -3, -1, -1, 0, 6];
// var min = arr[0];
// var secMin = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         secMin = min;
//         min = arr[i];
//     } else if (arr[i] < secMin) {
//         if (arr[i] !== min) {
//             secMin = arr[i];
//         }
//     }
// }
// console.log(secMin);

/********************      5       ********************/

// var arr = [3, 11, -5, -3, 2];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

/******************        6       *****************/

// var arr = [2, 4, -2, 7, -2, 4, 2];
// var second = [];
// var isSymmetric = "The array is symmetric";
// for (var i = arr.length - 1; i >= 0; i--) {
//     second[second.length] = arr[i];
// }
// for (var j = 0; j < arr.length; j++) {
//     if (arr[j] !== second[j]) {
//         isSymmetric = "The array is not symmetric";
//     }
// }
// console.log(isSymmetric);

/************          7          ******************/

// var arr1 = [4, 5, 6, 2];
// var arr2 = [3, 8, 11, 9];
// var newArr = [];
// for (var i = 0; i < arr1.length; i++) {
//     newArr[newArr.length] = arr1[i];
//     newArr[newArr.length] = arr2[i];
// }
// console.log(newArr);

/*************         8          ********************/

// var arr1 = [4, 5, 6, 2];
// var arr2 = [3, 8, 11, 9];
// var newArr = [];
// for (var i = 0; i < arr1.length; i++) {
//     newArr[i] = arr1[i];
//     newArr[i + arr1.length] = arr2[i];
// }
// console.log(newArr);

/*************          9         ********************/

// var arr = [4, 6, 2, 8, 2, 2];
// var e = 2;
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== e) {
//         newArr[newArr.length] = arr[i];
//     }
// }
// console.log(newArr);

/*************         10          *****************/

// var arr = [2, -2, 33, 12, 5, 8];
// var p = 15;
// var e = 78;
// var newArr = [];
// var msg = "Error";
// for (var i = 0; i < arr.length; i++) {
//     if (p > arr.length) {
//         newArr = msg;
//     }

//     if (p === i) {
//         newArr[i] = e;
//         newArr[newArr.length] = arr[i];
//     } else {
//         newArr[newArr.length] = arr[i];
//     }
// }
// console.log(newArr);

/*******************       isSymmetric          *****************/

var arr = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric = "The array is symmetric";
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
        isSymmetric = "The array is not symetric";
    }
}
console.log(isSymmetric);