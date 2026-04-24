 const array = [10, 20, 30, 40, 20, 40, 30];
 const unique = [];

 for(const item of array){
    if(unique.includes(item)==false){
        unique.push(item);
    }
 }
 console.log(unique);