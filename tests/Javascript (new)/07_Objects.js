// Objects are collection of properties
let person = {

    firstName : 'Rajnish',
    lastName :'Thakur'
}
console.log(person)             // To print comple object value

console.log(person.firstName)  // To print any property value
console.log(person['lastName'])  // Another way of printing values

person.firstName = 'Rajneesh'  // To update existing property value
console.log(person.firstName)

person.age = 33                   // To add any new property     
console.log(person)

delete person.age               // To delete any property value
console.log(person)


