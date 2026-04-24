/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

const numbers =[5,6,11,12,98, 5];

function find(array){
    let count = 0;
    for(const number of numbers){
        if(number == array){
            count++
        }
    }
    return count;
}
console.log(find(5));