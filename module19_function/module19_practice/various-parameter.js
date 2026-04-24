/**
 * for given string tell me wheather it has even numbers of characters or not
 */

function everNumberCharacter(str){
    const len = str.length;
    console.log(str, len);
    if(len % 2 == 0){
        console.log('Even:');
        return true;
    }
    return false;
}

const result=everNumberCharacter('barishal');
console.log(result);

//bolean paramiter for function
console.log('------------boolean------------------')
function doubleOrTripple(number, doDouble){
    if(doDouble== true){
        const result = number * 3;
        return result;
    }
    else{
        const result = number * 2;
        return result;
    }
}
const tripple=  doubleOrTripple(10, true);
const double = doubleOrTripple(10, false);
console.log('triple:', tripple);
console.log('double:', double);

//array parameter and argument for function
console.log('--------------array-------------------');
function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

console.log(numberOfElements([12, 13, 14, 15]));