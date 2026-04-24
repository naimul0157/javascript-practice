/**
 * write a function to give me the sum of all numbers in an array
 */

function sumOfnumbers(numbers){
    let sum_num = 0;
    for(let i = 0; i<numbers.length; i++){
        sum_num = sum_num + numbers[i];
    }
    return sum_num;
}


const sum = sumOfnumbers([12, 13, 14, 15]);
console.log('sum of number is:', sum);