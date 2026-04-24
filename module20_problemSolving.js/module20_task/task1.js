/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celsiusToFarenheit(celsius){
    let Fahrenheit = (celsius * 9/5) + 32;
    return Fahrenheit;
}

const cel = 40;
console.log(celsiusToFarenheit(cel));