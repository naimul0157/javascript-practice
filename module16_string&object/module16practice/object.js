// objects
// primitive
// basic, primary data type
let name = "naimul islam"
//object is non primitive data type
const bottle = {
    brandName : "apple",
    price : 45,
    color : "white",
    isClean : false

}

const subject = {
    subName: 'biology',
    teacherName : "maya medum",
    chapter : ['first', 'second', 'third', 'fourth'],
    exam : {
        name : 'final exam',
        marks : 100,
        date : "12 jul 2026"
    }

}
const cat = {
    name : 'mewa',
    color : 'white',
    age : 10,
    owner_name : 'samia hossain'
}
console.log(subject["chapter"]);
cat.name = 'hola';
let catName = cat['name'];
console.log(catName);