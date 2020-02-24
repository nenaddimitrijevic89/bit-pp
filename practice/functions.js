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

// function replaceSpaceWithDashes(str, separator) {
//     if (typeof separator === "undefined") {
//         separator = "-";
//     }
//     var newStr = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             newStr += separator;
//         } else {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }
// var result = replaceSpaceWithDashes("Nenad je  hirurg");
// console.log(result);

/******    10     ******/

// function addDot(str, n) {
//     var newStr = "";
//     for (var i = 0; i < n; i++) {
//         newStr += str[i];
//     }
//     newStr += "...";
//     return newStr;
// }
// var result = addDot("Nenad Dimitrijevic", 8);
// console.log(result);

/*****    11    ******/

// function convertArrOfStrings(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== "number" && isFinite(arr[i])) {
//             newArr[newArr.length] = parseFloat(arr[i]);
//         }
//     }
//     return newArr;
// }
// var result = convertArrOfStrings([
//     "1",
//     "21",
//     undefined,
//     NaN,
//     "42",
//     "1e+3",
//     Infinity
// ]);
// console.log(result);

/*****   12   *******/

// function retirement(birthYear, gender) {
//     var age;
//     if (gender === "male") {
//         age = 65 - (2020 - birthYear);
//         if (age <= 0) {
//             return "Already retired!";
//         }
//     } else {
//         age = 60 - (2020 - birthYear);
//         if (age <= 0) {
//             return "Already retired!";
//         }
//     }
//     return age;
// }
// var result = retirement(1654, "female");
// console.log(result);

/*****    13    *******/

// function humnizeNumb(numb) {
//     if (numb % 100 >= 11 && numb % 100 <= 13) {
//         return numb + "th";
//     }
//     switch (numb % 10) {
//         case 1:
//             return numb + "st";
//         case 2:
//             return numb + "nd";
//         case 3:
//             return numb + "rd";
//     }
//     return numb + "th";
// }
// var result = humnizeNumb(1002);
// console.log(result);