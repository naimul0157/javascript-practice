// Count how many times a string has the letter a or A

let name = 'Adnan Islam';
let count = 0;
for(let i = 0; i<name.length; i++){
    if(name[i]=='a' || name[i]=='A'){
        count++;
    }
}
console.log(count);