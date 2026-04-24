/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */

const vowels = ['a', 'e', 'i', 'o', 'u'];
function findVowel(vowel){
    let count = 0;
  for(let i = 0; i<vowel.length; i++){
    for(let j = 0; j<vowels.length; j++){
        if(vowel[i]==vowels[j]){
            count++;
        }
    }
  }
  return count;
    }

    const name = 'faysal tarek';
    console.log(findVowel(name));