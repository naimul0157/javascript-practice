let sentence = 'i am learning web dev.';
let reverse = '';
// for(const letter of sentence){
//     reverse = letter + reverse;
// }
console.log(reverse);
for(let i = 0; i<sentence.length; i++){
    let letter = sentence[i];
    reverse = letter + reverse;
}
console.log(reverse);
// shortcut way to reverse a string
let reversed = sentence.split('').reverse().join("");
console.log(reversed);