/*******    1   *******/

// function product(a, b) {
//     var res;
//     if (a > b) {
//         res = a;
//     } else {
//         res = b;
//     }
//     return res;
// }


// var b = product(4, 10);
// console.log(b)

/********      2      ******/

// function isOdd(a) {
//     var res = a % 2 === 1;
//     return res;
// }



// var b = isOdd(4);
// console.log(b)

/*******     3     *********/

// function isThreeDig(a) {

//     if (a >= 100 && a < 1000) {
//         return true;
//     } else {
//         return false;
//     }

// }

// var b = isThreeDig(1500);
// console.log(b);

/********    4     *********/

// function sum(a, b, c, d) {
//     var res;
//     res = (a + b + c + d) / 4;
//     return res;
// }


// b = sum(4, 5, 8, 9);
// console.log(b)

/********      5       *********/

// function square(a) {
//     var res = "";
//     for (var i = 0; i < a; i++) {
//         res = res + "\n";
//         for (var j = 0; j < a; j++)
//             if (i === 0 || i === a - 1 || j === 0 || j === a - 1) {
//                 res = res + "* ";
//             } else {
//                 res = res + "  ";
//             }

//     }
//     return res;
// }

// var b = square(30);
// console.log(b);

/**********     6     ***********/

// function square(a, b, c) {
//     var res = "";
//     for (var i = 0; i < a; i++) {
//         res = res + "* ";
//     }
//     res = res + "\n";
//     for (var j = 0; j < b; j++) {
//         res = res + "* ";
//     }
//     res = res + "\n";
//     for (var s = 0; s < c; s++) {
//         res = res + "* ";
//     }
//     return res;
// }

// var b = square(5, 3, 7);
// console.log(b);

/*********     7   prvi nacin  *******/

// function numbOfDigits(num) {
//     for (var i = 0; i < num; i++) {
//         num = num / 10;
//     }
//     if (num >= 1) {
//         i++;
//     }
//     return i;
// }

// var b = numbOfDigits(100000000000000000002354897654);
// console.log(b);

/***********  7   drugi nacin  ********/

// function numbOfDigits(num) {
//     for (var i = 0; i < num; i++) {
//         num = (num - (num % 10)) / 10
//     } return i;
// }
// var a = numbOfDigits(1);
// console.log(a);

/********     8     **********/

// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;
// function appear(arr, b) {
//     var res = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === b) {
//             res[res.length] = arr[i];
//         }
//     } return res.length;
// }
// var b = appear(a, e);
// console.log(b);

/*********     9    *********/

// var a = [2, 4, 7, 8, 7, 7, 1];

// function sumOdd(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             sum = sum + arr[i];
//         }
//     } return sum;
// }

// var b = sumOdd(a);
// console.log(b)

/******         10       ************/

// var string = "AabbbbabbbbAAAba";

// function numbOfA(a) {
//     var number = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === "a" || a[i] === "A") {
//             number++
//         }
//     } return number;
// }
// var b = numbOfA(string);
// console.log(b)

/*******      11      *******/


// function string(a, b) {
//     var str = "";
//     for (var i = 0; i < b; i++) {
//         str = str + a;
//     } return str;
// }
// var b = string("hehe", 5);
// console.log(b);



// var numb = 123456789012345678901234567890;

// for (var i = 0; numb > 9; i++) {
//     numb = numb / 10;
// }
// if (numb >= 1) {
//     i++;
// }
// console.log(i);