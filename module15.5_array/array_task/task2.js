/**
 * 2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
 */
let destination = ['sitakundo', 'cumilla', 'sylhet'];
destination.push('bandarban');
console.log(destination);
destination.unshift('rangamati');
console.log(destination);
let out1=destination.pop();
console.log("Final result=", destination);
console.log(out1);