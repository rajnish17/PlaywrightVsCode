let marks2 = Array(6);
let marks1 = new Array(20,60,50,80,90);

// Simple method to store array
let marks = [20,60,50,80,90];

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

let sum = 0;
for (let i=0; i<marks.length; i++)
{
    sum = sum + marks[i];
}

