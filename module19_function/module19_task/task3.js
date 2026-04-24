/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(numbers){
    let sum = 0;
    let avg;
    for(let i =0; i<numbers.length; i++){
        sum = sum + numbers[i];
        avg = sum / numbers.length;
    }
    return avg;
}

const array = [20, 30, 40, 20];
console.log(make_avg(array));