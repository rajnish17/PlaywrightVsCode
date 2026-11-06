// Objects are collection of properties
let person = {

    firstName : 'Rajnish',
    lastName :'Thakur',
    Weight : 98,
    fullName : function()
    {
        console.log(this.firstName+this.lastName)
    }
}
person.fullName()

console.log(person)             // To print comple object value

console.log(person.firstName)  // To print any property value
console.log(person['lastName'])  // Another way of printing values

person.firstName = 'Rajneesh'  // To update existing property value
console.log(person.firstName)

person.age = 33                   // To add any new property     
console.log(person)

delete person.age               // To delete any property value
console.log(person)


console.log('gender' in person)  // To check if the property present in object - True/False


for (let key in person)         // To print all values of object
{
    console.log(person[key])
}


// Practice
let testConfig = {
    browser: "Chrome",
    headless: false,
    timeout: 30000
};

//Update browser from "Chrome" to "Firefox".
testConfig.browser = "Firefox";
console.log(testConfig.browser)

//Add a new property env with the value "QA".
testConfig.env = "QA";
console.log(testConfig);

// /Check if 'retries' exists in testConfig (should print false).
console.log('retries' in testConfig)

//Write a for...in loop that prints both the key name and its value like this:
// console.log(key + " : " + testConfig[key]).

for (let key in testConfig)
{
    console.log(key + ":" + testConfig[key])
}
