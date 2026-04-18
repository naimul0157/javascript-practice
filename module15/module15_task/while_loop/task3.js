

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let number = 81;
let sum = 0;
while (number <= 131) {
    if (number % 2 == 1) {
        sum = sum + number;
    }
    number++;
}
console.log("Result=", sum);