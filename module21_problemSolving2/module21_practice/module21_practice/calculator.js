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
        return substraction(a, b);
    }
    else if(operation == 'multiplication'){

        return multiply(a, b);
    }
    else if(operation == 'divide'){
        return divided(a, b);
    }
    else{
        return 'only add, multiply, substraction & divided are allowed'
    }

}

console.log(calculaor(20, 30, 'multiplication'));

