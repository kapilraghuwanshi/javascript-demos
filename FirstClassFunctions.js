
// function statement 
function a(){
    console.log("inside a");
}
a();
// inside a

// function decalaration or Function Declaration
const k = function (){ // function ascting as value
    console.log("inside b");
}
k();
// inside b
// not hoisted 

// Anonymous Function
function (){
    console.log("inside b");
}
// SyntaxError: Function statements require a function name


// Named Function Expression

const k = function abc(){ // function ascting as value
    console.log("inside b");
}
k(); // inside b
abc();
// ReferenceError: abc is not defined
// abc has local scope 


const k = function abc(){
    console.log(abc);
}
k();
// ƒ abc(){  console.log(abc);}

const k = function abc(param1){
    console.log(param1);
}
k();
// ƒ abc(){  console.log(abc);}

const k = function abc(param1){
    console.log(param1); // param1 also has a local scope
}
k(1);// 1

// First Order Functions

const k = function abc(param){ 
    console.log(abc);
    console.log(param);
}
k(function(){});  // passed another function as arguments
// ƒ abc(param){ 
//    console.log(abc);
//    console.log(param);
// }

//ƒ (){}


const k = function abc(param){ 
    console.log(param);
}

function op(){
}

k(op);
// ƒ op(){}

const k = function abc(){ 
    return function(){
        
    }
}
k();
//ƒ (){}

const k = function abc(){ 
    return function xyz(){
        
    }
}
k();
// ƒ xyz(){}


