function totalFine(fare){
    if(typeof fare !== 'number' || fare<=0){
        return "Invalid";
    }
    fine = fare + fare * 20/100 + 30;
    return fine;
    
}
console.log(totalFine(50));