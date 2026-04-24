function add (price1, price2){
    const total = price1 + price2;
    if(total % 2 == 0){     //condition for return value
        return total;
    }
    else{
        return 0;
    }
}
const bill = add(81, 20);
console.log(bill);


//some mathmatical function
function doMath(num1, num2){
        const sum = num1 + num2;
        const diff = num1 - num2;
        const mult = sum * diff;
        const result = mult/2;
        return result;
}
const a = 40;
const b = 30;
console.log(doMath(a, b));

//conditional return

function isEven(number1){
    if(number1 % 2 == 0){
        return true;
    }
    return false;
}

console.log(isEven(21));