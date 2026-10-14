// Old way of function
function add(a,b)

{
    return (a+b)
}
let sum = add(2,3)
console.log(sum)

// Another way
let sum1 = function (c,d)
{
    return(c+d)
}
console.log(sum1(4,6))


// Best way
let sum2 = (c,d) => (c+d)
console.log(sum2(5,6))

// Practice
let multiply = (c,d) => (c*d)
console.log(multiply(4,5))

let greetuser = (username) => ("Hello, " + username)
console.log(greetuser("Raj"))

let messageUser = (username) => ("Good night " + username)
console.log(messageUser("Raj"))

let morningMessage = (username) => ("Good morning " + username)
console.log(morningMessage("Raj"))

let birthdayGreeting = (username) => ("Happy Birthday "+username)
console.log(birthdayGreeting("Rajnish"))