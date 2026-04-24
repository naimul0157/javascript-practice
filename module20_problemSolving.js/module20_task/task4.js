/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function longestWord(word){
    const split_word = word.split(" ");
    let  longest = split_word[0];
    for(let i = 0; i<split_word.length; i++){
                if(split_word[i].length>longest.length){
                    longest = split_word[i];
                }
            }

            return longest;
        }
const sentence = 'I am learning Programming to become a programmer';
console.log(longestWord(sentence));