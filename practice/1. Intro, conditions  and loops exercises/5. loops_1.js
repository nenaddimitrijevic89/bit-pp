//1
// for (var i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log("Broj " + i + " je paran!");
//     } else {
//         console.log("Broj " + i + " je neparan!");
//     }
// }

//2
// var sum = 0;
// for (var i = 0; i < 1000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

//3
// var arr = [1, 6, 8, 9, 5, 15];
// var sum = 0;
// var product = 1;
// for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     product = product * arr[i];
// }
// console.log(sum, product);

//4
// var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
// var str = "";
// for (var i = 0; i < x.length; i++) {
//     str = str + x[i];
// }
// console.log(str);

//5
// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];
// for (var i = 0; i < a.length; i++) {
//     for (var j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }

//6
// var sum = 0;
// for (var i = 0; i <= 20; i++) {
//     sum = sum + i * i;
// }
// console.log(sum);

//7
// var marks = [80, 77, 88, 95, 68];
// var sum = 0;

// for (var i = 0; i < marks.length; i++) {
//     sum = sum + marks[i];
// }
// var average = sum / marks.length;
// var grade = "";
// if (average > 90) {
//     grade = "A";
// } else if (average > 80 && average <= 90) {
//     grade = "B";
// } else if (average > 70 && average <= 80) {
//     grade = "C";
// } else if (average > 60 && average <= 70) {
//     grade = "D";
// } else {
//     grade = "F";
// }
// console.log(grade);

//8
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }