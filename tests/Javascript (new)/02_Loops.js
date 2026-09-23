// IF else loop *********************************************************
const isRedLight= true;

if (!isRedLight)
{
    console.log("Green/Yellow signal, drive car")
}
else
{
    console.log("Stop the car")
}


const isLoggedIn = true;

if (!isLoggedIn)
{
    console.log("Logged in successfully")
}
else
{
    console.log("Please login")
}

// While loop ********************************************************

let i = 0;
while (i<10)
{
    i++
    console.log("I am inside loop")
}

//Example
let attempts = 0;
while (attempts <5)
{
    attempts++
    console.log(`Checking till attempts = ${attempts}`)
}

//Example
let loginAttempt = 0;
while (loginAttempt < 10)
{
    loginAttempt++
    console.log(`continue till attempt reaches to ${loginAttempt}`)
}


// Do while loop *******************************************************
let j = 0;
do
{

    j++
}
while(j>10);
console.log("j = "+ j)

//example
let scoreA = 50
while (scoreA <= 50)
{
    scoreA = scoreA + 10
    console.log(`scoreA = ${scoreA}`)
}

//example
let scoreB = 50;
do
{
    scoreB++
}
while (scoreB < 50)
{
    console.log(`scoreB = ${scoreB}`)
}

// For Loop *********************************************

for (i = 0; i<=10 ; i++)
{
    console.log(i)
}


// While example

let required = true
while (required)
{
    console.log(required)
    required = false
}


// Example - Give numbers divisible by 2 and 5 upto 100
for (i=1; i<=100; i++)
{
    if (i%2 == 0 && i%5 ==0)
    {
        console.log(i)
    }
}


// Example - Give numbers divisible by both 2 and 5 untill 10
for (i =1; i<=10; i++)
{
    if(i%2 == 0 || i%5 == 0)
    {
        console.log(i)
    }
}

// Example - Give first 3 digits divisible by both 2 & 5
let n=0;
for (i=1; i<=100; i++)
{
    if (i%2 == 0 && i%5 == 0)
    {
        n++;
        console.log(i)
        if (n == 3)
        break
    }
}

/// Practice questions

//Task 1: Check if the cart total qualifies for a ₹100 discount.

let cartTotal = 800;
if (cartTotal >= 500)
{
    console.log("Discount applied: Pay " + (cartTotal - 100))
}
else
{
    console.log("No discount: Pay " + cartTotal)
}

// Task 2 : Print a countdown from 5 down to 1.
let count = 5;
while(count>0)
{
    console.log("countdown: ", count)
    count--
}

// Task 3 : Run an action once even though the starting condition fails.
let attempt = 5;
do
{
    console.log("Number of attempt = " + attempt)
    attempt++
}
while (attempt <5)
{
    console.log("Final attempt value = " + attempt)
}

// Task 4 : Basic for Loop (Print Numbers 1 to 5)
for(i=1;i<=5;i++)
{
    console.log("Item number = ",i)
}

//Task 5 : Print 3 browser names from an array using their index

let browser = ["Chrome", "Firefox", "Opera", "Safari"]
for (i=0; i<browser.length; i++)
{
    console.log("Name of browser = " + browser[i])
}

//Task : A student or test run gets a mark out of 100.
let score = 39
if(score>=40)
{
    console.log("Status : Pass")
}
else
{
    console.log("Status : Fail")
}

// Task : The for Step-Counter (Even Numbers)
for (let i=2; i<=10; i= i+2)
{
    console.log("Even numbers ", i)
}

// Task : The for Step-Counter (Odd Numbers)
for(let i=1; i<=10; i = i+2)
{
    console.log("Odd numbers = ", i)
}

// Task : Looping Through Your Mobile Brands

let phones = ["Apple", "Samsung", "Oppo", "Vivo", "Xiomi"]

for (let i=0; i<phones.length; i++)
{
    console.log("List of phones = ", phones[i])
}

// While example - Treat it as Fuel tank example

let fuel = 3;

while(fuel>0)
{
    console.log("Fuel left in tank =", fuel)
    fuel--; // consumes 1 unit of fuel
}
console.log("No fuel left")


// Another while example

let daysLeft = 10;

while (daysLeft>0)
{
    console.log("Days left for exam ", daysLeft);
    daysLeft--;
}

console.log("Its time to face the exam")