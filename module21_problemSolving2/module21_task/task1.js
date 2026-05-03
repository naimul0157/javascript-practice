/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heigts = [167, 190, 120, 165, 137];

function lowest(number){
    let low = number[0];
    for(let i = 0; i<number.length; i++){
        if(number[i]<low){
            low = number[i];
        }
    }
    return low;
}
console.log(lowest(heigts));