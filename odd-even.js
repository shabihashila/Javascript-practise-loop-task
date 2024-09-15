/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
let num = 61;
while (num >= 61 && num <= 100) {
  if (num % 2 !== 0) {
    console.log("odd number :", num);
  }

  num++;
}
/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
let number = 78;
while (number >= 78 && number <= 98) {
  if (number % 2 === 0) {
    console.log("even number: ", number);
  }
  number++;
}
