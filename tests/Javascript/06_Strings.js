// Strings using methods 'length', 'slice', 'split', 'trim', Sting to Date, Date to String

let day = " Tuesday "
console.log(day.length); // It gives length of string (not index)

console.log(day.slice(0,5));  //It gives portion from main string from 0 to 5 = " Tues"

console.log(day[1]);  // It gives element of specific index = "T"

console.log(day.split("s"))  // It splits "Tuesday" by "s" = [" Tue", "day "]

console.log((day.split("s"))[1])  // It shows 1st index from splitted string ["Tue", "day "] = "day "
console.log((day.split("s"))[0])  // It shows 1st index from splitted string ["Tue", "day "] = " tue"


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
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
console.log(typeof(diff));  // It gives type of variable = number

//Convert numbers to strings using method "toString"
let stringDiff = diff.toString();
console.log(stringDiff);
console.log(typeof(stringDiff));   // It gives type of variable = string