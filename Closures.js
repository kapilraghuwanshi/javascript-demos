
function x(){
    var a = 5;
    function y(){
        console.log(a);
    }
    y();
}
// 5


function x(){
    var a = 5;
    function y(){
        console.log(a);
    }
    return y;
}

// or 

function x(){
    var a = 5;
    return function y(){
        console.log(a);
    }
}

const z = x();
// y(){ console.log(a); }
z();
// 5

//or 
x()();
//5

function x(){
    var a = 5;
    function y(){
        console.log(a); // closure has a's reference not exact value (currently=5)
    }
    a = 77;
    return y;
}
const z = x();
z();
// 77


function z(){
    var b = 6;
    function x(){
    var a = 5;
        function y(){
            console.log(b, a);
        }
        y();
    }
    x();
}
z();
// 6, 5

// counter function

function counter(){
    let count = 0;
    return function increment(){
        count++;
        console.log(count);
    }
}
const c1 = counter();
c1(); // 1
c1(); // 2

const c2 = counter();
c2(); // 1
c2(); // 2
