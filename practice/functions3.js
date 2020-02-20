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

function joinElIntoString(arr) {
    var newArr = "";
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            newArr = newArr + arr[i];
        }
    }
    return newArr;
}
var result = joinElIntoString([
    NaN,
    0,
    15,
    false, -22,
    Infinity,
    "",
    undefined,
    47,
    null
]);
console.log(result);