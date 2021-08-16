
console.log(b);
var b = 5;
// 5

console.log(b);
let b = 5;
// ReferenceError: b is not defined

let x = 4;
let x = 7;
// Syntax Error: x is already declared

const c = 8;
c = 9;
// TypeError: Assignment to constant variable.

{
}
// {}
// empty block is also a valid stmt

{
var a = 5; // global scope
let b = 6; // block scope
const c = 6; // block scope
}

// block scope
{
var a = 5;
let b = 6;
const c = 6;
}
console.log(a); // 5
console.log(b); // not defined 
console.log(c); // not defined

// Shadowing

var a = 10;
{
var a = 5;
let b = 6;
const c = 7;
console.log(a); // 5
console.log(b); // 6
console.log(c); // 7
}
console.log(a); // 5


let b = 10;
{
var a = 5;
let b = 6;
const c = 7;
console.log(a); // 5
console.log(b); // 6
console.log(c); // 7
}
console.log(b); // 10

// function shadowing

const c = 100;
function x(){
const c = 6;
console.log(c); // 6
}
x();
console.log(c); // 100


var a =5;
{
    var a =10;
}

let b =5;
{
    let b =10;
}

// illegal shadowing
let c = 5;
{
    var c =10;
}
// SyntaxError: Identifier 'c' has already been declared

let c = 5;
function x(){
    var c =10;
}
x(); // valid only
 
let d = 5;
{
    let d =10;
}


var e = 5;
{
    let e =10;
}

// block scope follws lexical scopes

const c = 5;
{
    const c = 10;
    {
        const c = 15;
        console.log(c); // 15
    }
    console.log(c); // 10
}
console.log(c); // 5
