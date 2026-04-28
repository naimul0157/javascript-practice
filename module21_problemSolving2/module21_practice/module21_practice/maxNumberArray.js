const array = [20, 100, 50, 60];
let largest= array[0];
for(let i = 0; i<array.length; i++){
    if(array[i]>largest){
        largest = array[i];
    }
}
console.log(largest);