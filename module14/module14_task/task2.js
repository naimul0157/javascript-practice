// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

let weight= 300;
let height = 10;
let bmi;
bmi = weight / height^2;
if (bmi< 18.5) {
    console.log("You are underweight");
}
else if (bmi >= 18.5 && bmi <=24.9) {
    console.log("You are normal");
}
else if(bmi >=25 && bmi<=29.9){
    console.log("You are overweight");
}
else{
    console.log("You are obese");
}
