// one way to display array
let marks1 = Array(6);
marks1 = new Array(20,35,45,95,38,100);

console.log(marks1)

//other way to display array
let marks = [20,45,65,78,100]
console.log(marks)

//to access index value
console.log(marks[2])

//to update element in array
marks[1] = 28;
console.log(marks)
console.log(marks.length);

//To add new element in array
marks.push(68)
console.log(marks)

//To remove last element
marks.pop();
console.log(marks)

//To add new element in begining of array
marks.unshift(9)
console.log(marks)

//To get the value of element
console.log(marks.indexOf(100))

//To search array value
console.log(marks.includes(101))

//To display part of an array
console.log(marks.slice(2, 4))