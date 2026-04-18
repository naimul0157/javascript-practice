let age = 31;
let price = 500;
if (age <= 12) {
    console.log("You can eat free");
}
else if (age >= 60) {
    // 50% discount
    let discount = price * 50/100;
    let pay =  price - discount;
    console.log("Price=", price);
    console.log("50% Discount=", discount);
    console.log("To pay=", pay);
}
else if (age > 12 && age <= 30) {
    // student discount 25%
    let discount25 = price * 25/100;
    let pay25 = price - discount25;
    console.log("Price=", price);
    console.log("Discount 25%=", discount25);
    console.log("To pay=", pay25);
}
else{
    console.log('To pay=', price);
}