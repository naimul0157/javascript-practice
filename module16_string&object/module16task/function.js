function moneyBag(){
    var money = 65;
    console.log(money);
}
// moneyBag();
function add(input1, input2){
    let sum = input1+input2;
    return sum;
}

// const result = add(10, 20);
// console.log(result);

var target = ["sex", "fuck", "bainchud", "mother fucker", "shala", "kankir_pola"]

let wrd = "the word is sentence is  , , sdfj fuck sdfkj sdfj fuck sdfsdf sdf er bainchud shala kankir_pola shala "

let finalResult = "the word is sentence is , shala sdfj sdfkj sdfj sdfsdf sdf er "
// let final=[];
let result = wrd.split(" ");
for(let i = 0; i<result.length; i++){
for(let j = 0; j<target.length; j++){
    if(target[j]==result[i]){
        delete result[i];
    }
}
}
console.log(result.join(" "));