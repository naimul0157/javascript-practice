const mobiles = [
    {name : 'samsung', price : 200000, camera : '12mp', color: 'black' },
    {name : 'iphone', price : 20000, camera : '12mp', color: 'black' },
    {name : 'opp', price : 15000, camera : '12mp', color: 'black' },
    {name : 'vivo', price : 250000, camera : '12mp', color: 'black' },
    {name : 'honor', price : 10000, camera : '12mp', color: 'black' }
]
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(const phone of phones){
        if(phone.price<cheapest.price){
            cheapest = phone; 
        }
    }
    return cheapest;
}

console.log(cheapestPhone(mobiles));