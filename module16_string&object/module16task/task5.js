// Loop through an object and print the key-value pairs with their types
let myObject={
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
}
const myobj = Object.keys(myObject);
for(let obj of myobj){
    console.log('key:', obj, '| type:', typeof(myObject[obj]));
}