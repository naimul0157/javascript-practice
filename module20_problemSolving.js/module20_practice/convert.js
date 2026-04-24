// inch  to feet convertion

function inc(a){
    const inch = a%12;
    const feetFraction = a/12;
    const feet = parseInt(feetFraction);
    // console.log(a, 'inc =', feet.toFixed(0), 'feet', inch, 'inch');

    // another system
    const result = feet + ' ft ' + inch +' inch. ';
    return result;

}
let value = 50;
console.log(value, 'inch=', inc(value));