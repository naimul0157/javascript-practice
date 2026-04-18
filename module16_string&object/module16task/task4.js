// Count the number of properties.
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
};
const properties = Object.keys(student);
let count = 0;
for(let i=0; i<properties.length; i++){
    count++;
}
console.log(count);