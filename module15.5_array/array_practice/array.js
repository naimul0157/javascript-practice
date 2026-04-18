let number = [12, 'apple', 14, 15, 20];
number[0] = 15;
for(let i = 0; i<number.length; i++){
    if(number[i] == 'apple' ){
        continue;
    }
    let array = number [i];
    console.log(array);
}