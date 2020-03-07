"use strict";

/****   1   ****/

// var replaceFirstAndLast=(function(arr){
//     var a=arr[0];
//     var b=arr[arr.length-1];
//     arr[0]=b;
//     arr[arr.length-1]=a;
//     return arr;
// })([4, 5, 11, 9])

// console.log(replaceFirstAndLast)

/****   2   ****/

// var calculateSurface=(function(a, b){
//     return a*b;
// })(4,5);

// console.log(calculateSurface)

/****   3    ****/

// var replaceLetterWithStar=(function(str){
//     var count=0;
//     var newStr="";
//     for(var i=0; i<str.length; i++){
//         if(str[i]==="M" || str[i]==="m"){
//             newStr+="*";
//             count++;
//         }else{
//             newStr+=str[i];
//         }
//     }
//         return newStr+", "+count;
    
// })("prograMming");

// console.log(replaceLetterWithStar)

/****    4    ****/

// var makeEmail=(function(str){
//     var email="";
//     for(var i=0; i<str.length; i++){
//         if(str[i]===" "){
//             email+=".";
//         }else{
//             email+=str[i];
//         }
//     }
//     return email+"@gmail.com";
// })("nenad dimitrijevic");

// console.log(makeEmail)

/****   5    ****/

// var calculateOctalNumber=(function(numb){
//     return parseInt(numb, 8);
// })(144)

// console.log(calculateOctalNumber);

/****    6    ****/

// var successCallback=function(){
//     return "Your password is cool!"
// }
// var errorCallback=function(){
//     return "The password is invalid!"
// }

// var isValidPassword=(function(password){
//     for(var i=0; i<password.length; i++){
//         if(typeof parseInt(password[i])==="number" && password.length>5){
            
//             return successCallback();
//         }
        
//         return errorCallback();
//     }
// })("nenad123");

// console.log(isValidPassword)

/****    7    ****/

var checkCallback=function(numb){
    if(numb%2===1){
        return true;
    }
    return false;
}

var filteredArr=(function(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        if(checkCallback(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
})([2, 8, 11, 4, 9, 3]);

console.log(filteredArr);