const letter = "f          aa a a a h"
function onlycharacter(str){
    if(typeof str !=  'string'){
        return 'Invalid'
    }
    else{
        const divide = str.split("");
        const uppercase = [];
        for(let i = 0; i<divide.length; i++){
             uppercase.push(str[i].toUpperCase());
        }
        const result = uppercase.join(" ").replace(/\s+/g, '').trim();
        return result;
    }
}
console.log(onlycharacter(letter));