/*****    1   *****/

// function insertString(str1, str2, n) {
//     var newStr = "";
//     if (n === undefined) {
//         newStr = str2 + str1;
//     }
//     for (var i = 0; i < str1.length; i++) {
//         if (i === n) {
//             newStr = newStr + str2;
//         }
//         newStr = newStr + str1[i];
//     }
//     return newStr;
// }
// var result = insertString("My random string", " JS ", 9);
// console.log(result);

/****   2    *****/

// function joinElIntoString(arr) {
//     var newStr = "";
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'undefined' && isFinite(arr[i]) && arr[i] !== null) {
//             newStr = newStr + arr[i] + ",";
//         }
//     }
//     return newStr;
// }
// var result = joinElIntoString([
//     NaN,
//     0,
//     15,
//     false, -22,
//     Infinity,
//     "",
//     undefined,
//     47,
//     null
// ]);
// console.log(result);

/*****   3   *****/

// function filterFalsy(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             newArr[newArr.length] = arr[i]
//         }
//     } return newArr;
// }
// var result = filterFalsy([NaN,
//     0,
//     15,
//     false, -22,
//     "",
//     undefined,
//     47,
//     null]);
// console.log(result);

/****   4   *****/

// function reverseNumb(numb) {
//     var a;
//     var b = "";
//     a = numb + "";
//     for (var i = a.length - 1; i >= 0; i--) {
//         b = b + a[i];
//     }
//     return parseFloat(b);
// }
// var result = reverseNumb(12345);
// console.log(result)

/*****   4    ******/

// function numb(br) {
//     var a;
//     var b = "";
//     a = br + "";
//     for (var i = a.length - 1; i >= 0; i--) {
//         b = b + a[i]
//     } return parseFloat(b);
// }

// var res = numb(12345)
// console.log(typeof res)

/****   5   ******/

// function lastEl(arr, n) {
//     if (n === undefined) {
//         return arr[arr.length - 1];
//     }

//     var newArr = [];
//     for (var i = arr.length - n; i < arr.length; i++) {
//         newArr[newArr.length] = arr[i];
//     }
//     return newArr;
// }
// var result = lastEl([1, 2, 3, 4, 5, 6], 3)
// console.log(result);

/****   6   ******/

// function arrOfEl(numb, el) {
//     if (el === undefined) {
//         el = null;
//     }

//     var newArr = [];
//     for (var i = 0; i < numb; i++) {
//         newArr[newArr.length] = el;
//     }

//     return newArr
// }
// console.log(arrOfEl(5, 0))

/******    7   ******/

// function perfectNumb(numb) {
//     var sum = 0;
//     for (var i = 0; i < numb; i++) {
//         if (numb % i === 0) {
//             sum = sum + i;
//         }
//     }

//     if (sum === numb) {
//         return true;
//     }

//     return false;
// }
// var result = perfectNumb(496);
// console.log(result);

/******    8   ******/

// function findWord(str, word) {
//     var newStr = "";
//     var sum = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             newStr += str[i];
//         } else {
//             if (newStr === word) {
//                 sum++;
//             }
//             newStr = "";
//         }
//     }
//     if (newStr === word) {
//         sum++;
//     }
//     return sum;
// }
// console.log(findWord("the quick fox brown fox fox", "fox"));

/****     9    ****/

// function hideEmail(input) {
//     var newStr = "";
//     var helpStr = "";
//     var count = 0;
//     var finalStr = "";
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] !== "@") {
//             helpStr += input[i];
//         }
//         if (input[i] === "@") {
//             count = i;
//             break;
//         }
//     }
//     for (var j = count; j < input.length; j++) {
//         newStr += input[j];
//     }
//     for (var k = 0; k < helpStr.length / 4; k++) {
//         finalStr = finalStr + helpStr[k];
//     }
//     return finalStr + "..." + newStr;
// }
// console.log(hideEmail("nenaddimitrijevic89@gmail.com"));

/****   10    *****/

// function mostFreqItem(arr) {
//     var str = "";
//     var str2 = "";
//     var count = 0;
//     var count2 = 0;
//     for (var i = 0; i < arr.length; i++) {
//         count = 0;
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//                 str = arr[i];
//             }
//         }
//         if (count > count2) {
//             count2 = count;
//             str2 = str;
//         }
//     }
//     return str2 + ":" + count2;
// }
// console.log(mostFreqItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));