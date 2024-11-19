// console.log("welcome to loop collaboration");
// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
// }
console.clear();
// const x1 = setInterval(() => {
//   for (let i = 0; i < 5; i++) console.log(i);
//   //   clearInterval(x);
// }, 3000);

// setTimeout(() => {
//   clearInterval(x1);
//   console.log("Interval cleared");
// }, 10000);

let count = 0;
const x = setInterval(() => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  count++;
  if (count === 5) {
    clearInterval(x);
    console.log("Interval cleared");
  }
}, 3000);
