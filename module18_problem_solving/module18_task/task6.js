/**
 * Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
 */

let students = [
      { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]

for(let i = 0; i<students.length; i++){
    console.log(students[i].name, "scored", students[i].marks);
}