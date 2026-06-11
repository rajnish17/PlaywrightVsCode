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
