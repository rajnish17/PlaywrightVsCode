// Var variable - global/functional level
var greet = "Evening"  // this can be accesses as its global level

if (1==1)
{
    var greet = "Afternoon" // This will be replaced with 'Evening' as its not under function
    greet = "night"  // both let&var can be reinitialised
}

function add(a,b)
{
    var greet = "Morning" // this can not be accessed as its functional level
    return (a+b)
}

let sum = add(2,3)
console.log(sum)
console.log(greet)

console.log("***************************************************");

//Let global level/functional level

let greet1 = "Evening"  // this can be accesses as its global level
//const greet = "Evening"  // Only difference is const can not be reinitialised while let & var can
greet1 = "night"  // both let&var can be reinitialised
if (1==1)
{
    let greet1 = "Afternoon" // This will not be accesses as its in block level
}

function add(a,b)
{
    let greet1 = "Morning" // This will not be accesses as its in block level
    return (a+b)
}

let sum1 = add(2,3)
console.log(sum1)
console.log(greet1)