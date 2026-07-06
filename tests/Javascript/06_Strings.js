// Strings using methods

let day = " Tuesday "

//length method
console.log(day.length); // It gives length of string (not index)

//slice method
console.log(day.slice(0,5));  //It gives portion from main string from 0 to 5 = " Tues"

console.log(day[1]);  // It gives element of specific index = "T"

//split method
console.log(day.split("s"))  // It splits "Tuesday" by "s" = [" Tue", "day "]

console.log((day.split("s"))[1])  // It shows 1st index from splitted string ["Tue", "day "] = "day "
console.log((day.split("s"))[0])  // It shows 1st index from splitted string ["Tue", "day "] = " tue"

//trim method
console.log((day.split("s"))[1].trim()) // It trims the blank spaces = "day"
console.log((day.split("s"))[0].trim()) // It trims the blank spaces = "tue"


console.log((day.split("s"))[0].length)   // Length without trim = 4
console.log((day.split("s"))[0].trim().length)  // Lengh with trim = 3


console.log((day.split("s"))[1].length)   // Length without trim = 4
console.log((day.split("s"))[1].trim().length)   // Length with trim = 3

console.log("******************************************")

// Convert string to numbers using method"parseInt"
let date = '25'
let nextDate = '30'

//parseInt method
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
console.log(typeof(diff));  // It gives type of variable = number

//Convert numbers to strings using method "toString"
//toString() method
let stringDiff = diff.toString();
console.log(stringDiff);
console.log(typeof(stringDiff));   // It gives type of variable = string

//string concatination
let newQuote = day + "is funday"
console.log(newQuote)  // it combines " Tuesday " + "is funday" =  "Tuesday is funday"

console.log(newQuote.indexOf("day"))   // It gives starting index value of'day'
console.log(newQuote.indexOf("day",6))  // it gives index value of next simillar string after 6th index