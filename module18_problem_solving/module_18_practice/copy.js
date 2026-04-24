// copy array from an array
let products = [10, 15, 20, 25, 30];
let com_products = [];
for(let prod of products){
    com_products.push(prod);
}
// console.log(products);
// console.log(com_products);

// another way
let numbers = [20, 30, 40, 50];
let cop_number = Array.from(numbers);
cop_number[0]= 15;
console.log(numbers);
console.log(cop_number);

// another way

let new_numbers = [...numbers];
new_numbers[0]= 12;
new_numbers.push(12);
console.log(numbers);
console.log(new_numbers);