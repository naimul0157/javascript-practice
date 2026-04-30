function add (num1, num2){
    return num1+num2;
}
function substraction(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divided(num1, num2){
    return num1/num2;
}

function calculaor(a, b, operation){
    if(operation == 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation == 'subtraction'){
        const result = substraction(a, b);
        return result;
    }
    else if(operation == 'multiplication'){
        const result = multiply(a, b);
        return result;
    }
    else{
        const result = divided(a, b);
        return result;
    }
}

console.log(calculaor(20, 30, 'multiplication'));