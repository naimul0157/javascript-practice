function lowestPrice(rate){
    let minimum = price[0];
    for(let i =0; i<price.length; i++){
        if(price[i]<minimum){
            minimum = price[i];
        }
    }
    return minimum;
}
const price = [10000, 2000, 500, 160000];
console.log(lowestPrice(price));