// one way to display array
let marks1 = Array(6);
marks1 = new Array(20,35,45,95,38,100);
console.log(marks1)

console.log("*******************************")

//other way to display array
let marks = [20,45,65,78,100]
console.log(marks)

console.log("*******************************")

//to access index value
console.log(marks[2])

console.log("*******************************")

//to update element in array
marks[1] = 28;
console.log(marks)
console.log(marks.length);

console.log("*******************************")

//To add new element in array
marks.push(68)
console.log(marks)

console.log("*******************************")

//To remove last element
marks.pop();
console.log(marks)

console.log("*******************************")

//To add new element in begining of array
marks.unshift(9)
console.log(marks)

console.log("*******************************")

//To get the value of element
console.log(marks.indexOf(100))

console.log("*******************************")

//To search array value
console.log(marks.includes(101))

console.log("*******************************")

//To display sub array from main array
console.log(marks.slice(2, 4))

console.log("*******************************")

//To print one by one element individually
for (let i=0; i<marks.length; i++)
{
    console.log(marks[i])
}

console.log("*******************************")

//To sum all values of array
let sum = 0
for (i=0; i<marks.length; i++)
{
    sum = sum + marks[i]
}
console.log(sum)