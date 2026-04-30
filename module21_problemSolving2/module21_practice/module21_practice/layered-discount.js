
// multi layer discount

function multilayerDiscount(products){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(products<=100){
        const price = products*100;
        return price;
    }
    else if(products<=200){
        const first100 = 100*first100Price;
        const secondOned = (products-100)*second100Price;
        const price = first100 + secondOned;
        return price;
    }
    else{
        const first100 = 100 * first100Price;
        const second100 = 100 * second100Price;
        const lastOne = (products-200) * above200Price;
        const price  = lastOne + first100 + second100;
        return price;

    }
}

console.log(multilayerDiscount(245));