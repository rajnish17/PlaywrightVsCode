let marks2 = Array(6);
let marks1 = new Array(20,60,50,80,90);

// Simple method to store array
let marks = [20,60,55,88,90];

// How to address Array
console.log(marks[0]);

// How to replace Array
marks[3] = 30;
console.log(marks[3]);

// How to check length of an Array
console.log(marks.length)

// How to add element at end of array
marks.push(60);
console.log(marks)

// How to delete element from end of array
marks.pop();
console.log(marks)

// How to add element at begining of array
marks.unshift(10);
console.log(marks)

// How to identify index of element
console.log(marks.indexOf(30));

// How to check if specific element present or not in array
console.log(marks.includes(100));

// How to create subarray
console.log(marks.slice(2,5)); //will display indexe elements from 2,3,4

// How to print all elements from array
for (let i=0; i<marks.length; i++)
{
    console.log(marks[i])
}

// How to print sum value of array
let sum = 0;
for (let i=0; i<marks.length; i++)
{
    sum = sum + marks[i];
}
console.log("Total marks = " + sum);

// How to print average of all arrays
let summ = 0
for (let i=0; i<marks.length; i++)
{
    summ = summ + marks[i]; 
}
let average = summ / marks.length;
console.log("Average marks = "+ average);

// How to print number greater than 50
for (let i=0; i<marks.length; i++)
{
    if (marks[i]>50)
    {
        console.log(marks[i])
    }
}

// How to Print numbers less than 50
for (let i=0; i<marks.length; i++)
{
    if(marks[i]<50)
    {
        console.log(marks[i])
    }
}

// How to Print even numbers
for (let i=0; i<marks.length; i++)
{
    if (marks[i]%2 == 0)
    {
        console.log(marks[i])
    }
}

// How to print count of numbers greater than 50
let count = 0
for (let i=0; i<marks.length; i++)
{
    if (marks[i]>50)
    {
        count ++;
    }
}
console.log("Count = "+ count)


// How to find highest mark
let highest = marks[0];
for (let i=0; i<marks.length; i++)
{
    if (marks[i] > highest)
    {
        highest = marks[i]
    }
}
console.log("Highest marks = "+ highest)

// How to print sum value of array using reduce filter map
let total = marks.reduce((sum, mark)=>sum+mark,0)
console.log("Total marks ="+ total)

// How to print even numbers
var scores = [12,18,15,19,20,31]
for (let i=0; i<scores.length; i++ )
{
    if (scores[i]%2 ===0)
    {
        console.log(scores[i])
    }
}

// Create a new array with even numbers of scores array
var evenScores = [];
for (let i=0; i<scores.length; i++)
{
    if (scores[i]%2 === 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores);

// Create a new array with even numbers of scores array using filter
let newFilterEvenScore = scores.filter(score=> score%2 == 0);
console.log(newFilterEvenScore);


// Create new array with even numbers and multiply by 3 using map method
let mappedArray = newFilterEvenScore.map(score => score*3);
console.log(mappedArray)

// Create new array with even numbers and multiply by 3 and sum them
let mappedSumArray = mappedArray.reduce((sum,val) => sum +val,0)
console.log(mappedSumArray);

// How to combine all above 3 codes
var scores1 = [12,18,15,19,20,31]
let sumValue = scores1.filter(score => score%2 ==0).map(score => score*3).reduce((sum,val) => sum+val,0);
console.log(sumValue);

// How to do sorting of strings
let fruits = ["mango", "banana", "chiku", "apple" ];
fruits.sort();
console.log(fruits);

// How to do sorting of strings in reverse order
fruits.reverse()
console.log(fruits);

// How to do sorting of numbers
console.log(scores1.sort((a,b) => a-b));


// How to do sorting of numbers in reverse order
console.log(scores1.sort((a,b) => b-a));