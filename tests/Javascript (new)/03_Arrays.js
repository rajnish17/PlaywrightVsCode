
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