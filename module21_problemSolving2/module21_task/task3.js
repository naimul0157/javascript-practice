/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(num1, num2, num3){
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const total = laptop * num1 + tablet * num2 + mobile * num3;
    return total;
}
console.log(calculateElectronicsBudget(2, 2, 10));