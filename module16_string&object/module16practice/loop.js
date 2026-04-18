const mobile = {
    brand : 'samsung',
    model : 'j20',
    price : 25000,
    color : 'black',
    camera : '12mp'
}
// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }
const keys = Object.keys(mobile);
console.log(keys);
for(const keyPhone of keys){
    console.log(keyPhone, ":", mobile[keyPhone]);
}