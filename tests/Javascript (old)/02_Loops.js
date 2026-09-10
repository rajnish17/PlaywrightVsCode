// IF ELSE LOOP
const flag = true;

if (!flag)
{
    console.log("Condition not satisfied")
}
else
{
    console.log(flag)
    console.log("Condition satisfied")
}

console.log("***********************************")

// WHILE LOOP --> This keeps on executing condtion untill condition breaks
let i=0; 
while(i<10)
{
    i++
    console.log(i)
}

let required = true
while(required)
{
    console.log(required);
    required = false;
}

console.log("***********************************")

// DO WHILE LOOP --> This executes code once and then checks condition
let j=0;
do{
j++
}while(j>10);
console.log(j);

console.log("***********************************")

// FOR LOOP --> USE THIS WHN YOU KNOW HOW MANY TIMES YOU TO USE THIS LOOP
for (k=0; k<=10; k++)
{
    console.log(k)
}

console.log("***********************************")

//From 1 to 10, given common multiple values of 2 and 5
for (i=1; i<=10; i++)
{
    if( i%2 == 0 & i%5 == 0)
    {
        console.log(i)
    }
}

console.log("***********************************")

//From 1 to 100, given common multiple values of 2 and 5 and take only first 3 numbers

let n=0
for (i=1; i<=100; i++)
{
    if(i%2 == 0 & i%5 == 0)
    {
        n++
        console.log(i);
        if(n==3)
        break;
    }
}
