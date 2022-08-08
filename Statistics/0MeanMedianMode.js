const test = require("../lib/test");

/**
 * @param {*} input
 */
function MeanMedianMode(input) {
  const process = input.split("\n");
  const dataStr = process.length === 2 ? process[1].split(" ") : [];
  const data = dataStr.map((i) => Number(i));
  data.sort(function (a, b) {
    return a - b;
  });

  // Mean
  const total = data.reduce((p, c) => p + c, 0);
  const mean = (total / data.length).toFixed(1);

  // Median
  const middle = Math.floor((data.length + 1) / 2);
  let median;
  if (data.length % 2) {
    median = data[middle];
  } else {
    median = ((data[middle - 1] + data[middle]) / 2).toFixed(1);
  }

  // Mode
  const counts = {};
  for (const num of data) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let mode = null,
    mostOccurrence = 0;
  for (const [num, count] of Object.entries(counts)) {
    if (count > mostOccurrence) {
      mostOccurrence = count;
      mode = num;
    }
  }

  return [mean, median, mode];
}

const testCases = [
  {
    input: ["10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060"],
    expected: [43900.6, 44627.5, 4978],
  },
];
test(testCases, MeanMedianMode);
