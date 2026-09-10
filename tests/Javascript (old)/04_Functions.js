//basic function
function add(a,b)
{
    return (a+b)
}

let sum = add(2,3);
console.log(sum)


//Anyonymus function --> Do not have name -- Function expressions
let sumOfIntegers = function (c,d)
{
    return(c+d)
}
console.log(sumOfIntegers(10,5))

// Another Anyonymus function --> With using FAT operator
let sumOfNumbers = (c,d) => c+d
console.log(sumOfNumbers(8,9))


console.log("****************************************************")


/// Function code practice

//1st Method
function substract (c,d)
{
    return (c-d)
}
let sub2 = substract (20,30)
console.log(sub2)

//2nd method
let sub3 = function (c,d)
{
    return (c-d)
}
console.log(sub3(30,10))

//3rd method
let sub4 = (c,d) => (c-d)
console.log(sub4(40,20))



//1st menthod
function sub(c,d)
{
    return (c-d)
}
let sub5 = sub(5,10)
console.log(sub5)

//2nd method
let sub6 = function (c,d)
{
    return (c-d)
}
console.log(sub6(40,30))

//3rd method
let sub7 = (c,d) => (c-d)
console.log(sub7(100,50))