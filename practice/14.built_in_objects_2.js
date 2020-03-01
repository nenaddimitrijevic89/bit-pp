/****    1    ****/

// var reverseNumber = function(numb) {
//     return parseFloat(
//         numb
//         .toString()
//         .split("")
//         .reverse()
//         .join("")
//     );
// };
// console.log(typeof reverseNumber(12345));

/****    2     ****/

// var alphabeticalOrder = function(str) {
//     return str
//         .toLowerCase()
//         .split("")
//         .sort()
//         .join("");
// };
// console.log(alphabeticalOrder("Webmaster"));

/****   3    ****/

// var alphabetizeWords = function(str) {
//     var a = str.split(" ");
//     newArr = [];
//     for (var i = 0; i < a.length; i++) {
//         newArr.push(a[i].split("").sort());
//     }
//     return newArr.join("");
// };
// console.log(alphabetizeWords("Republic Of Serbia"));

/****   4    ****/

// var splitAndConvertStr = function(str) {
//     return str.split(" ");
// };
// console.log(splitAndConvertStr("John Snow"));

/****   5    ****/

// var cutString = function(str) {
//     var index = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             index = i;
//         }
//     }
//     return str.slice(0, index + 2) + ".";
// };
// console.log(cutString("Nenad Dimitrijevic"));

/****   6   ****/

// var addStr = function(str1, str2, side) {
//     var a = "";
//     if (side === "l") {
//         return str2 + str1.slice(str2.length, str1.length);
//     }
//     return str1.slice(0, str1.length - str2.length) + str2;
// };
// console.log(addStr("abcdefg", "123", "r"));

/****   7   ****/

// var firstLetterCap = function(str) {
//     var a = str[0].toUpperCase();
//     return a.concat(str.slice(1, str.length));
// };
// console.log(firstLetterCap("nenad"));

/****   8   ****/

// var hideEmail = function(input) {
//     var index = 0;
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] === "@") {
//             index = i;
//         }
//     }
//     var a = input.slice(0, index / 3);
//     var b = input.slice(index);
//     return a + "..." + b;
// };
// console.log(hideEmail("nenaddimitrijevic89@gmail.com"));

/****   9   ****/

var swapTheLetter = function(str) {};