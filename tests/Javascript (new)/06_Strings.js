let day = 'Thursday '
console.log(day.length)

let subDay = day.slice(0,4) // To take just portion of string
console.log(subDay)

console.log(day[1]) // To call out specific letter of the string

let splitDay = day.split('s') // To split string into two using any one letter
console.log(splitDay)
console.log(splitDay[1].length)
console.log(splitDay[1].trim())  // To remove any blank spaces
console.log(splitDay[1].trim().length)


let date = '28'
let nextDate = '30'


let diff = parseInt(nextDate) - parseInt(date); // To convert from string to number
console.log(diff)

console.log(diff.toString()) // To convert back from number to string

// Practice

let bannerText = "Please use temporary password 'rahulshettyacademy' to Login.";

// Task: Split the string by single quote (') and print the password part
let splitBanner = bannerText.split("'");
console.log(splitBanner); 

// Which index [0], [1], or [2] holds 'rahulshettyacademy'?
let password = splitBanner[1];
console.log("Extracted Password:", password);


// Practice
let alertMsg = "Success! Your profile has been updated.";

console.log(alertMsg.includes("Success")); // true
console.log(alertMsg.includes("Error"));   // false


// Practice
let quote = "Thursday is a busy day";

console.log(quote.indexOf("day"));     // 5 (finds 'day' inside 'Thursday' first!)
console.log(quote.indexOf("day", 6));  // 19 (starts searching from index 6 onwards, finding the second 'day')
console.log(quote.indexOf("Friday"));  // -1 (word does not exist in the string)

// Practice
let quote1 = "Thursday is a busy day";
let count = 0;
let value = quote1.indexOf("day"); // First occurrence is at index 5

while (value !== -1) {
    count++; // Increment counter
    value = quote1.indexOf("day", value + 1); // Search again starting right after the current match
}

console.log("Total occurrences of 'day':", count); // 2

// How to concanate two strings
let day2 = "Monday"

let newQuote = day2 + " is funday day"
console.log(newQuote)

// if want to search index of 'day' after monday
let val = newQuote.indexOf("day",4)
console.log(val)

// If want to check how many times day occurance is there
let value1 = newQuote.indexOf("a")
let count1 = 0;

while (value1!== -1)
{
    count1++;
    value1 = newQuote.indexOf("a", value1+1)
}
console.log(count1)
