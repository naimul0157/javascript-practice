/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50cft
 */
function woodQuantity (table, chair, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const tableTotalwood = table * perTableWood;
    const chairTotalwood = table * perChairWood;
    const totalBedwood = bed * perBedWood;

    const totalWood = tableTotalwood + chairTotalwood + totalBedwood ;


    return totalWood ;
}

console.log(woodQuantity(20, 30, 50));