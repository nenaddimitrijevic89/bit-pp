/***********      1    ************/

// function maxOfTwo(a, b) {
//     return a * b;
// }
// var res = maxOfTwo(5, 5);
// console.log(res);

/**********        2     *************/

// function isOdd(numb) {
//     if (numb % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// var res = isOdd(2);
// console.log(res);

/***********        3       ***********/

// function isThreeDigit(numb) {
//     if (numb >= 100 && numb < 1000) {
//         return true;
//     }
//     return false;
// }

// var res = isThreeDigit(999);
// console.log(res);

/*********       4        ***********/

// function arithmetic(a, b, c, d) {
//     return (a + b + c + d) / 4;
// }

// var res = arithmetic(4, 5, 5, 6);
// console.log(res);

/**********       5        *************/

// function square(numb) {
//     var star = "";
//     for (var i = 0; i < numb; i++) {
//         star = star + "\n";
//         for (var j = 0; j < numb; j++) {
//             var ver = i === 0 || i === numb - 1;
//             var hor = j === 0 || j === numb - 1;
//             if (ver || hor) {
//                 star = star + "* ";
//             } else {
//                 star = star + "  ";
//             }
//         }
//     }
//     return star;
// }
// var res = square(5);
// console.log(res);

/********      6      ***********/

// function rows(a, b, c) {
//     var row = "";
//     for (var i = 0; i < a; i++) {
//         row = row + "* ";
//     }
//     row = row + "\n";
//     for (var j = 0; j < b; j++) {
//         row = row + "* ";
//     }
//     row = row + "\n";
//     for (var k = 0; k < c; k++) {
//         row = row + "* ";
//     }
//     console.log(row);
// }
// rows(5, 4, 7);

/*******     7    **********/

// var numb = 123456789012345678901234567890;

// for (var i = 0; numb > 9; i++) {
//     numb = numb / 10;
// }
// if (numb >= 1) {
//     i++;
// }
// console.log(i);

/********       8       *********/

// var a = [2, 4, 7, 7, 8, 7, 7, 1];
// var e = 5;

// function appearances(arr, el) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === el) {
//             newArr[newArr.length] = arr[i];
//         }
//     }
//     return newArr.length;
// }

// console.log(appearances(a, e));

/*********    9     *********/

// var arr = [0, 4, 8, 12, 7, 9];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

/********     10     *********/

// var str = "NenaAAd AAnsjksdaAjha";
// var small = 0;
// var large = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str[i] === "A") {
//         large++;
//     } else if (str[i] === "a") {
//         small++;
//     }
// }
// console.log(small, large);

/********      11     ********/

// var str = "ha";
// var numb = 5;
// var newStr = "";
// for (var i = 0; i < numb; i++) {
//     newStr += str;
// }

// console.log(newStr);