const products = [
    {name: 'shampo', price: 300},
    {name: 'chiruni', price: 300},
    {name: 'pant', price: 300},
    {name: 'shirt', price: 1200}
]
function getshopping(cart){
let sum = 0;
for(const product of products){
    sum = sum + product.price;
}
 return sum;
}
console.log(getshopping(products));