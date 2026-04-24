function leapYear(year){
    if((year % 4==0 & year % 100!=0) || (year % 400==0)){
        console.log('leap year');
    }
    else{

        console.log("not leap year");
    }
}
const value = 2052;
leapYear(value);