const numbers= [90, 50, 10]
function resultReport(number){
    if((Array.isArray(number) ==false)){
        return "Invalid";
    }
    else{
    let sum = 0;
   let finalscore = 0;
   let pass = 0;
   let fail = 0;
    for(let i = 0; i<number.length; i++){
         sum = (sum + number[i]);
        finalscore = Math.round(sum / number.length);
        if(number[i]>=40){
            pass++;
        }
        else{
            fail++;
        }
    }
    return {finalscore, pass, fail};

}
}
console.log(resultReport(numbers));