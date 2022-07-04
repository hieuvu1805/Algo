const test = require("../../lib/test");

/**
 * TC: O(1)
 * SC: O(1)
 *
 * @param {int} year
 * @returns
 */
function dayOfProgrammerSpecify(year) {
  // 243 is 1st September (normal year)
  let day = 256 - 243;
  if (isLeapYear(year)) day--;
  if (year === 1918) day += 13;

  return `${day}.09.${year}`;
}

const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function dayOfProgrammer(year) {
  let day = 256;
  if (isLeapYear(year)) day--;
  if (year === 1918) day += 13;

  let month = 1;
  for (let i = 0; i < daysOfMonth.length; i++) {
    if (day > daysOfMonth[i]) {
      day -= daysOfMonth[i];
    } else {
      month += i;
      break;
    }
  }

  return `${fomat(day)}.${fomat(month)}.${year}`;
}

function isLeapYear(year) {
  if (year < 1918) {
    return year % 4 === 0;
  }
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function fomat(n) {
  return n > 9 ? n : `0${n}`;
}

const testCases = [
  {
    input: [1984],
    expected: "12.09.1984",
  },
  {
    input: [2017],
    expected: "13.09.2017",
  },
  {
    input: [2016],
    expected: "12.09.2016",
  },
  {
    input: [1800],
    expected: "12.09.1800",
  },
  {
    input: [1918],
    expected: "26.09.1918",
  },
];
test(testCases, dayOfProgrammer);
test(testCases, dayOfProgrammerSpecify);
