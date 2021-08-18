
// higher order function
const withCurrencyPrefix = (value, formatter) => formatter(value);

//callback functions
const rupee = (value) => "₹" + value;
const dollar = (value) => "$" + value;
const euro = (value) => "€" + value;

withCurrencyPrefix(45, rupee);  //₹45
withCurrencyPrefix(23, dollar); //$23


// higher order function
function calculate(radius, formula) {
    console.log(formula(radius));
}

//callback functions
function diameter(param){
    return 2*Math.PI*param;
}
function area(param){
    return Math.PI*param*param;
}


calculate(3, diameter);
// 18.84955592153876

calculate(3, area);
// 28.274333882308138
