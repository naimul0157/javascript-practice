const number = [1, 2, 3, 5, 6];
const tournament_runs = [[], [], []];
const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 74, 23, 11],
    [45, 87, 12, 56, 45],
    [78, 65, 32, 87, 54]
]
exam_marks[0][4] = 32;
// reverse the exam marks
for(let i = 0; i<exam_marks.length; i++){
    const reverse = exam_marks[i].reverse();
    console.log(reverse);
}
//after reverse result the first array first index
console.log(exam_marks[0][0])
const student = {
    name : 'adnan',
    class : 3,
    age : 20,
    color : 'white',
    mother_name : 'sabera',
    father_name : 'babul mia',
}
console.log(Object.keys(student));