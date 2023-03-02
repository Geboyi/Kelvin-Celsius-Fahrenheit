//Forecast today
const kelvin = 0;
// Conversion of Kelvin to Celsius
const celsius = kelvin - 273;
//Fahrenheit computation
let fahrenheit = celsius*(9/5) +32;
//Round down of temperature in fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)