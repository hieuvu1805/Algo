/*
TC: O(2^n)
SC: O(n) => stack size
               fib(4)
             /        \
         fib(3)      fib(2)
        /    \       /    \
  fib(2)   fib(1)  fib(1) fib(0)
  /     \
fib(1) fib(0)
*/
function fibRecursion(n) {
  if (n < 2) {
    return n;
  }
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}
// console.time("fibRecursion");
// console.log(fibRecursion(45));
// console.timeEnd("fibRecursion");

/*
Use dynamic programing to optimize time Complexity
TC: O(n)
SC: O(n) => cache size
*/
function fibRecursionDynamic(n, cache = [0, 1, 1]) {
  if (!cache[n]) {
    cache[n] = fibRecursionDynamic(n - 1, cache) + fibRecursionDynamic(n - 2, cache);
  }
  return cache[n];
}
// console.time("fibRecursionDynamic");
// console.log(fibRecursionDynamic(10000));
// console.timeEnd("fibRecursionDynamic");

/*
Use loop and only store current fib & previous number, coz that's all we need to get next Fibonacci number
Optiomize space complexity
TC: O(n)
SC: O(1)
*/
function fibLoop(n) {
  if (n < 2) {
    return n;
  }

  let temp,
    prev = 0,
    cur = 1;

  for (let i = 2; i <= n; i++) {
    temp = prev + cur;
    prev = cur;
    cur = temp;
  }
  return cur;
}
// console.time("fibLoop");
// console.log(fibLoop(100000000));
// console.timeEnd("fibLoop");

/*
Use formula (https://r-knott.surrey.ac.uk/Fibonacci/fibFormula.html#section1.2)
but remember that this calculator has some built-in limits for the number of decimal places it can accurately compute
Sometimes these inaccuracies will make numbers round to the wrong values.

Formula: Fn = {[(√5 + 1)/2] ^ n} / √5 

TC: O(logn) => 
SC: O(1)
*/
function fibFormula(n) {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}
// console.time("fibFormula");
// console.log(fibFormula(100000000000));
// console.timeEnd("fibFormula");

const testCases = [
  { input: 0, expected: 0 },
  { input: 1, expected: 1 },
  { input: 2, expected: 1 },
  { input: 65, expected: 17167680177565 },
  { input: 1000, expected: 4.346655768693743e208 },
];

const testFunc = fibLoop; // fibRecursionDynamic, fibLoop, fibFormula
testCases.every(({ input, expected }) => {
  if (testFunc(input) !== expected) {
    console.error(`failed: n = ${input}`);
    return false;
  }
  console.log(`success: n = ${input}`);
  return true;
});

/*
Detecting when N is a Fibonacci Number (https://r-knott.surrey.ac.uk/Fibonacci/fibFormula.html#section5)
N is a Fibonacci number if and only if 5 N2 + 4 or 5 N2 – 4 is a square number.
*/
function isFibonacciNumber(n) {
  const temp = 5 * Math.pow(n, 2);
  return Number.isInteger(temp - 4) | Number.isInteger(temp + 4);
}
// test is not correct when n >= 738
// for (let i = 0; i < 1000; i++) {
//   const fib = testFunc(i);
//   if (!isFibonacciNumber(fib)) {
//     console.error(`failed: n = ${i}, fib = ${fib}`);
//     break;
//   }
// }
