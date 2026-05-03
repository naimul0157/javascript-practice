/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'ra'];
let smallest = heights2[0];
for(const height of heights2){
    if(height.length<smallest.length){
        smallest = height;
    }
}
console.log(smallest);