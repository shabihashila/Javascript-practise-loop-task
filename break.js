// for (let i = 0; i < 150; i++) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
// }

// let i = 1;
// while (i <= 120) {
//   console.log(i);
//   if (i >= 50) {
//     break;
//   }
//   i++;
// }
// console.log("fgg");

// let n = 55;
// while (n >= 5) {
//   console.log(n);
//   if (n > 50) {
//     break;
//   }
//   n--;
// }

let i = 0;
while (i <= 12) {
  i++;
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}
