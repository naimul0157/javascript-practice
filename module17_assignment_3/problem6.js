/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

for(let i = 1; i<=30; i++){
    startingSalary = startingSalary + (startingSalary * 5/100);
}
console.log(startingSalary.toFixed(2));