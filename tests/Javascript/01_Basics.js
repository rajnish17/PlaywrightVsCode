console.log("Hello world")

let a = 4;
console.log(a);
console.log(typeof(a));

console.log("**************************************")

let b = 25.65;
console.log(b);
console.log(typeof(b));

console.log("**************************************")

const c = "Rajnish";
console.log(c);
console.log(typeof(c));
// if dont want to change the variable agaibn ever, then use 'const' keyword

console.log("**************************************")

let d = true;
console.log(d);
console.log(typeof(d));

console.log("**************************************")

c = a + b;
console.log(c);
// we can not redeclare variable with let keyword but can reassign
//e.g let c = "rajnish" and then c = a +b -->> this is allowed with let

// we can redeclare and reassign with 'var' keyword
//e,g, var c = "rajnish" and then var c = a+b OR c = a+b -->> both allowed with var

console.log(!d)
//negative operator to reverse the boolean condition
