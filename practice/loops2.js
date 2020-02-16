// var a = [5, -4.2, 3, 7];
// var e = 3;
// var result = 'no';
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === e) {
//         result = 'yes';
//     }
// }
// console.log(result);

/****************************************************************** */

// var array = [-3, 11, 5, 3.4, -8];
// var arr = [];
// for (var i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         arr[i] = array[i] * 2
//     } else {
//         arr[i] = array[i];
//     }
// }
// console.log(arr);

/************************************************************************ */

// var arr = [4, 2, 2, -1, 6];
// var index = 0;
// var min = arr[index];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         index = i;
//     }
// }
// console.log(index, min);

/***************************************************************/

var arr = [4, 2, 2, 1, -1, 0, 6];
var index = 0;
var min = arr[index];
var pom = arr[index];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        pom = min;
        min = arr[i];
    }
}
console.log(pom);

/***********************************************************/

// var arr = [3, 11, -5, -3, 2];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

/******************************************************/

// var a = [4, 6, 2, 8, 2, 2];
// var e = 2;
// var arr = []
// for (var i = 0; i < a.length; i++) {
//     if (a[i] !== e) {
//         arr[arr.length] = a[i];
//     }
// }
// console.log(arr);

/**********************************************/

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var arr = [];
for (var i = 0; i < a.length; i++) {
    //if (p > a.length - 1) {
    if (p === i) {
        arr[p] = e;
    }
    arr[arr.length] = a[i];

    //}
    // if (p > arr.length - 1) {
    //     console.log('error')
    // }
}
console.log(arr);