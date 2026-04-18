// give me the list numbers between 1 to thirty divisable by 5
let sum = 0;
for(let i = 1; i <=100; i++){
        if(i == 15 || i==30){
            continue;       //continue is use to skip
        }
        if(i % 3 ==0 && i % 5== 0){
        sum = sum + i;
        console.log(i);
    }
}
console.log("Sum=", sum);
// do while loop
let number= 5;
do{
    console.log(number);
    number++;
}
while(number <= 10);