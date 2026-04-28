const products = [
    {name : 'shampoo', price : 600, quantity : 2},
    {name : 'shampoo', price : 200, quantity : 4},
    {name : 'shampoo', price : 500, quantity : 5},
    {name : 'shampoo', price : 600, quantity : 2},
]
function cartTotal (products){
    let sum = 0;
    // let TotalSum = 0;
    for(const product of products){
        sum = sum + product.price * product.quantity;
    }
    return sum;
}
const result = cartTotal(products);
console.log('Total cost :', result);