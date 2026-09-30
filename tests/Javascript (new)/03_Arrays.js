
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
