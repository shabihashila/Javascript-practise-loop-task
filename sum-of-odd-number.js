/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
// let num = 81;
// let sum = 0;
// while (num >= 81 && num <= 131) {
//   if (num % 2 !== 0) {
//     console.log("odd number:", num);
//     sum = sum + num;
//     console.log("sum of odd :", sum);
//   }
//   num++;
// }
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let number = 207;
let sum = 0;
while (number >= 207 && number <= 311) {
  if (number % 2 === 0) {
    console.log("even number:", number);
    sum = sum + number;
    console.log("sum of even:", sum);
  }
  number++;
}
