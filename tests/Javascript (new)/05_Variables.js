// Var, Let, Const

function add(a, b) {
    return a + b;
}

let sum = add(5, 6);
console.log("sum:", sum);

// 1. var: function-scoped, not block-scoped
var greeting = "Evening";

function showVar() {
    var greeting = "Morning";
    return greeting;
}

console.log("var in function:", showVar());
console.log("var outside function:", greeting);

var eveningGreeting = "Night";
if (true) {
    var eveningGreeting = "Afternoon";
}
console.log("var after if block:", eveningGreeting);

// 2. let: block-scoped
let blockGreeting = "Night";
blockGreeting = "Morning";

if (true) {
    let blockGreeting = "Afternoon";
    console.log("let inside block:", blockGreeting);
}

console.log("let outside block:", blockGreeting);

function showLet() {
    let localGreeting = "Night";
    return localGreeting;
}

console.log("let inside function:", showLet());

// 3. const: block-scoped and cannot be reassigned
const constantGreeting = "Morning";

if (true) {
    const constantGreeting = "Afternoon";
    console.log("const inside block:", constantGreeting);
}

console.log("const outside block:", constantGreeting);

const total = add(15, 20);
console.log("const total:", total);