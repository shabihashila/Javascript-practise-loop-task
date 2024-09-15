/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num = 81;
let sum1 = 0;
while (num >= 81 && num <= 131) {
  if (num % 2 !== 0) {
    sum1 = sum1 + num;
  }
  num++;
}
console.log("sum of odd :", sum1);
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let number = 206;
let sum = 0;
while (number >= 206 && number <= 311) {
  if (number % 2 === 0) {
    sum = sum + number;
  }
  number++;
}
console.log("sum:", sum);
