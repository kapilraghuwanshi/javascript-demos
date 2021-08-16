
function a(){
    console.log(b);
}
var b = 10;
a(); // 10

function a(){
    function c(){
        console.log(b);
    }
    c();
}
var b = 10;
a(); // 10

function a(){
    var b = 10;
    function c(){
        console.log(b);
    }
    c();
}
a(); // 10



function a(){
    var b = 10;
    function c(){
        
    }
    c();
}
a(); // 10
console.log(b); // reference error - b is not defined
