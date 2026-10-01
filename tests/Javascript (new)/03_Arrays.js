
let marks = [10,20,30,40,50,60,70,80]
console.log(marks)

//To call specific index number
console.log(marks[2]);

//To replace with new number
marks[4] = 5;
console.log(marks);

//To add new number at the end
marks.push(55);
console.log(marks)

//To remove last number
marks.pop();
console.log(marks)

// To add number at the begining
marks.unshift(15);
console.log(marks)

// To get the length of array
console.log(marks.length)

// To get index of given number
console.log(marks.indexOf(70))

// To search number in array
console.log(marks.includes(40));

// To break array 
console.log(marks.slice (2,5));

// To print array
for (i=0; i<marks.length; i++)
{
    console.log(marks[i])
}

// To sum all array numbers
let sum = 0
for (i=0; i<marks.length; i++)
{
    sum = sum + marks[i]
}
console.log(sum)

let fruits = ["Banana", "Apple", "Orange"]
for (i=0; i<fruits.length; i++)
{
    console.log(fruits[i])
}

let sum1 = 0;
for (i=0; i<marks.length; i++)
{
    sum1 = sum1 + i
}
console.log(sum)

// Total sum using reduce
let total = marks.reduce((sum,mark) => sum+mark,0)
console.log(total)

// Total multiplication using reduce
let total1 = marks.reduce((mult,mark) => mult*mark,1)
console.log(total1)

//Old way
var scores =[10,20,35,46,55,60]
for(i=0; i<scores.length; i++)
{
    if (scores[i] % 2 ==0)
    {
        console.log(scores[i])
    }
}

//using filter logic divisible by 2
let newFilter = scores.filter(score=>score%2 ==0)
console.log(newFilter)

// using filter logic divisible by 3
let newFilter1 = scores.filter(score=> score%3 ==0)
console.log(newFilter1)



// Task: Use reduce() to sum all three shipping fees into totalFee
// accumulator starts at 0
const shippingFees = [40, 25, 35];

const totalFee = shippingFees.reduce((total, fee) => total+fee, 0);

console.log("Total Delivery Charges:", totalFee);



// Task: Use .filter() to get response times > 200
const responseTimes = [120, 250, 95, 310, 180];

const slowRequests = responseTimes.filter(time => time>200);

console.log("Slow requests (>200ms):", slowRequests);

// Task: Use .filter() to extract only even numbers
const numbers = [12, 17, 24, 33, 40, 51];

const evenNumbers = numbers.filter(num => num%2 ==0);

console.log("Even numbers:", evenNumbers);

// Use of map - mapping the newly created array to new value eg. multiply by 3
let mappedArray = evenNumbers.map(num => num*3)
console.log(mappedArray);
let totalVal = mappedArray.reduce((sum,val) => sum+val,0)
console.log(totalVal) //Create a new array with even number socre and multiply each value with 3
// and sum the array



// Create a new array with even number socre and multiply each value with 3 and sum the array
// using chaining

let scores1 = [10,25,30,45,75,92,65,99];

let newtotal = scores1.filter(score => score%2 ===0).map(score=>score*3).reduce((sum,val) => sum+val,0)
console.log(newtotal)

// example
const basePrices = [200, 450, 1000];

// Task: Use .map() to subtract 50 from each price
const discountedPrices = basePrices.map(price => price-50);

console.log("Discounted Prices:", discountedPrices);
// Expected output: [150, 400, 950]


// Example
const testNumbers = [101, 102, 103, 104];

// Task: Use .map() to format each number as "TC_101", "TC_102", etc.
const formattedTestIDs = testNumbers.map(id => 'TC_' + id);

console.log("Formatted IDs:", formattedTestIDs);


// Practice 1

//You extracted an array of product prices from a shopping page. The business rules state:
//Filter: Keep only products priced above ₹200 (ignoring cheap add-ons).
//Map: Apply a flat 10% discount to each eligible item (multiply price by 0.9).
//Reduce: Sum the discounted items to calculate the final checkout total.


let rawPrices = [150, 500, 100, 1000, 300];

let filterProduct = rawPrices.filter(product => product>200);
console.log("Eligible Price =", filterProduct)

let mapProduct = filterProduct.map(product=> product*0.9)
console.log("Discounted Price =", mapProduct)

let reduceProduct = mapProduct.reduce((sum,val) => sum+val,0)
console.log("Final price =", reduceProduct)

// Chaining into one
let finalTotal = rawPrices.filter(product => product>200).map(product => product*0.9).reduce((sum,value) => sum+value,0);
console.log("Finalprice =", finalTotal)

// Pracrice 2:
//Write a chained script using .filter(), .map(), and .reduce() that:
//Converts each string into a pure number by removing '₹' and parsing it (Number(price.replace('₹', ''))).
//Filters to keep only items greater than 100.
//Sums all remaining items into a single final amount.

const scrapedPrices = ["₹120", "₹550", "₹80", "₹1200", "₹450"];
let finalPrice = scrapedPrices.map(Price => Number(Price.replace('₹', ''))).filter(Price => Price>100).reduce((sum,val) => sum+val,0);
console.log(finalPrice)


let tag = "$99";
let cleanTag = Number(tag.replace('$', ''));

console.log(cleanTag + 1)