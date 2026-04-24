const employees = [
    {name : 'asique', designation : 'content writter', salary : 25000},
    {name : 'abdur rahim', designation: 'developer', salary : 29000 },
    {name : 'atik', designation : 'operator', salary : 10000}
]
console.log(employees[1]);
for(const employee of employees){
    console.log(employee.salary);
}
for(let i = 0; i< employees.length; i++){
    console.log(Object.values(employees[i]));
}