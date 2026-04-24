/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

const statement = 'I am a hard working person';
const array = statement.split(' ');
const reverse = array.reverse();
let result = '';
console.log(reverse);
for(let resul of reverse){
    result = result + resul.concat()+" ";
}
console.log(result);
