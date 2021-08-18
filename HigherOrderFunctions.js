
// higher order function
const withCurrencyPrefix = (value, formatter) => formatter(value);

//callback functions
const rupee = (value) => "₹" + value;
const dollar = (value) => "$" + value;
const euro = (value) => "€" + value;

withCurrencyPrefix(45, rupee);  //₹45
withCurrencyPrefix(23, dollar); //$23
