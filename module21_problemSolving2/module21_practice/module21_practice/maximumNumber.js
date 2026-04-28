const zim = 90;
const tim = 89;
const kim = 95;
if(zim > tim && zim > kim ){
    console.log(zim);
}
else if(tim>zim && tim > kim){
    console.log(tim);
}
else {
    console.log(kim);
}


// with using function same problem
function maxmimumAmongNUmbers(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num3 && num2>num1){
        return num2
    }
    else {
        return num3;
    }
}

const number1 = 30;
const number2 = 60;
const number3 = 20;
console.log(maxmimumAmongNUmbers(number1, number2, number3));
