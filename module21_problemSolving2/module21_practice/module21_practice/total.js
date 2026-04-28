const products = [
    {name: 'shampo', price: 300, quantity: 2},
    {name: 'chiruni', price: 300, quantity: 3}, 
    {name: 'pant', price: 300, quantity: 4}, 
    {name: 'shirt', price: 1200, quantity: 5}
] 
function getshopping(cart){
let sum = 0;
for(const product of products){
    sum = sum + product.price;
}
 return sum;
}
console.log(getshopping(products));