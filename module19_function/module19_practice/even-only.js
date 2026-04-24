function evenNumbers(numbers){
    const evens = []
    for(const number of numbers){
        if(number %2 == 0){
            evens.push(number);
        }
    }
    return evens;

}
const array = [12, 14, 13, 15, 16];
// console.log(evenNumbers(array));

function sumOfEvenNumbers(values){
    let sum = 0;
    for(const value of values){
        if(value % 2 ==0 ){
            sum = sum + value;
        }
    }
    return sum;
}
const number_array = [12, 14, 13, 15, 16];
console.log(sumOfEvenNumbers(number_array));