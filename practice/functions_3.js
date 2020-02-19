/*****       1     ********/

// function isString(input) {
//     if (typeof input === "string") {
//         return true;
//     }
//     return false;
// }
// var result = isString(3);
// console.log(result);

/******      2     *******/

// function isBlank(input) {
//     if (typeof input !== "string") {
//         return false;
//     }
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] !== " ") {
//             return false;
//         }
//     }

//     return true;
// }

// var result = isBlank(12);
// console.log(result);

/*******    3     ******/

// function concatStr(str, n) {
//     var newStr = "";
//     for (var i = 0; i < n; i++) {
//         newStr = newStr + str;
//     }
//     return newStr;
// }

// var result = concatStr("ha", 5);
// console.log(result);

/******    4     *******/

// function countStr(str, letter) {
//     var a = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             a++;
//         }

//     }
//     return a;
// }


// var result = countStr("Nikolaaoooaa", "o");
// console.log(result);

/********     5    ******/

// function firstPosition(str, n) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === n) {
//             return i+1;
//         }
//     }
//     return -1;
// }

// var result = firstPosition("nikolka", "k");
// console.log(result);

/********     6    ********/

// function lastPosition(str, n) {
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[i] === n) {
//             return i+1;
//         }
//     }
//     return -1;
// }


// var result = lastPosition("nikolakok", "k");
// console.log(result);

/*******    7    ********/

// function convertStr(str) {
//     var a = [];
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             a[a.length] = null;
//         } else {
//             a[a.length] = str[i];
//         }
//     }
//     return a;
// }

// var result = convertStr("My random string");
// console.log(result);

/*******     8     *******/

// function isPrime(numb) {
//     for (var i = 2; i < numb; i++) {
//         if (numb % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// var result = isPrime(12);
// console.log(result);

/*****    9     *****/
