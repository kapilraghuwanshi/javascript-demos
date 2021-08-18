

setTimeout(function (){
    console.log("setTime");
}, 5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
console.log("y");
});

// x
// y
// stack empty
// after 5 seconds
// stack has one element async
// setTime



