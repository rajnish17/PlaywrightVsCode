for(i=1; i<=10; i++)
{
    console.log(i)
}

console.log ("******************************");

//from 1 to 100, give me common multipls of 3 & 5

for (i=1; i<=100; i++)
{
    if(i%3 == "0" && i%5 == 0)
    console.log(i)
}

console.log ("******************************");

// from 1 to 100, give me common multipls of 3 & 5 & take only first 2 numbers

let n = 0
for (i =1; i<=100; i++)
{
    
    if( i%3 == 0 && i%5 == 0)
    {
        n++
        console.log(i)
        if(n==2)
        break;
    }
}

console.log ("******************************");

let required = true;
while(required)
{
    console.log(required)
    required = false;

}
