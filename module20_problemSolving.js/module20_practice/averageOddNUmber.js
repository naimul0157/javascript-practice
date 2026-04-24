function avarage(a){
    let sum = 0;
    let oddNUmbers = [];
    for(const odd of a){
        if(odd % 2==1){
            oddNUmbers.push(odd);
        }
    }
    console.log(oddNUmbers);
    for(const avg of oddNUmbers){
        sum = sum + avg;
    }
    let av = sum / oddNUmbers.length;
    return av;
    
}

const array = [20, 15, 40, 13, 65, 81, 7];
console.log(avarage(array));