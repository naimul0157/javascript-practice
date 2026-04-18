const college = {
    name : 'plhs',
    class : [11, 12],
    events : ['science fair', 'bijoy dibosh', '21 feb'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'first',
        }

    }
}
college.unique.result.merit = 'second';
const changeResult = college.unique.result.merit;
console.log(changeResult);
delete college.class;
console.log(college);