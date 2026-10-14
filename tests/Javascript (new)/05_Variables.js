// Var, Let, Const

function add(a,b)
{
    return(a+b)
}
let sum = add (5,6)
console.log(sum)


// 1. Var -- Global level works, funciton level doesnt

var greet = "Evening"  // Var Works under Global level (out of function)
function add(a,b)
{
    var greet = "morning" // var Doesnt work under function level
    return(a+b)
}
let sum1 = add (5,6)
console.log(sum1)
console.log(greet)

//Another example
var greet = "Night"  // First it will take global level value
if (1==1)
{
    var greet = "Afternoon"  // Since its in If block not funciton so will take this latest
}

function add (a,b)
{
    var greet = "Morning" // var Doesnt work under function level
    return (a+b)
}
let sum2 = add (10,5)
console.log(sum2)
console.log(greet)


// 2. let // Doesnt works outside block level

{
let greet = "Night"  // First it will take global level value
greet = "Morning"
if (1==1)
{
    let greet = "Afternoon"  // let scope is limited to block level
}

function add (a,b)
{
    let greet = "Night" // let scope is limited to block level
    return (a+b)
}
let sum3 = add (10,5)
console.log(sum3)
console.log(greet)
}


// 3. Const // Can not reassign

{
const greet = "Morning"
//greet = "night"  // Const cant be reassigned
if (1==1)
{
    const greet = "Afternoon"
}

function add (a,b)
{
    const greet = "Evening"
    return (a+b)
}
let sum4 = add (15,20)
console.log(sum4)
console.log(greet)
}