const test = require("../lib/test");

function interQuartile(values, freqs) {
  const s = [];
  values.forEach((val, i) => {
    s.push(...Array(freqs[i]).fill(val));
  });
  s.sort((a, b) => a - b);

  const middle = Math.floor(s.length / 2);

  const iq = getMedian(s.slice(middle + (s.length % 2))) - getMedian(s.slice(0, middle));
  return iq.toFixed(1);
}

function getMedian(arr) {
  const middle = Math.floor(arr.length / 2);
  if (arr.length % 2) {
    return arr[middle];
  }

  return (arr[middle - 1] + arr[middle]) / 2;
}

const testCases = [
  {
    input: [
      [1, 2, 3],
      [3, 2, 1],
    ],
    expected: "1.0",
  },
  {
    input: [
      [6, 12, 8, 10, 20, 16],
      [5, 4, 3, 2, 1, 5],
    ],
    expected: "9.0",
  },
];
test(testCases, interQuartile);
