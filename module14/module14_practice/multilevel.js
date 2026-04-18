// multilevel condition

let price = 4400;
if (price >= 5000) {
    // 10% discount
    let discountPrice = price* 10/100;
    let finalPrice = price-discountPrice;
    console.log("10% Discount=",discountPrice);
    // final price after discount
    console.log("To pay=",finalPrice);
}
else if(price >= 4500 && price <= 4999){
    // 5% discount
    let discount = price* 5/100;
    let finalDiscount5 = price - discount;
    console.log("5% Discount=",discount);
    console.log("To pay=",finalDiscount5);
}
else{
    // without discount
    console.log("No discount avalable");
    console.log("To pay=", price);
}