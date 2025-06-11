/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const start = performance.now();
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    counter = counter + i;
  }
  return (performance.now() - start) / 1000;
}

let diff1 = calculateTime(100);
let diff2 = calculateTime(100000);
let diff3 = calculateTime(1000000000);
console.log(diff1 + "s");
console.log(diff2 + "s");
console.log(diff3 + "s");
