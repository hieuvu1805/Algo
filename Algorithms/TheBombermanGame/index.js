const test = require("../../lib/test");

/**
 * TC: O(n^2)
 * SC: O(1)
 *
 * @param {int} n : the number of seconds to simulate
 * @param {Array<string>} grid : an array of strings that represents the grid
 */
function bomberMan(n, grid) {
  grid = convertToGrid(grid);
  for (let i = 2; i <= getMaxRepeat(n); i++) {
    if (i % 2) {
      grid = detonates(grid);
    } else {
      grid = planBoom(grid);
    }
  }
  return convertToGridStr(grid);
}

function getMaxRepeat(seconds) {
  // Because of repeat so grid only have 3 types no matter how many times it is repeated
  if (seconds < 2) {
    return 0;
  } else if (seconds % 2 === 0) {
    return 2; // in even second => always full boom
  } else if ((seconds + 1) % 4 === 0) {
    return 3; // third second => boom(0) intial detonate
  } else if ((seconds - 1) % 4 === 0) {
    return 5; // fifth second => boom(1) plan at second 2 detonate
  }
}

function convertToGrid(grid) {
  return grid.map((row) => row.split("").map((i) => (i === "O" ? 0 : i)));
}

function convertToGridStr(grid) {
  return grid.map((arr) => arr.map((i) => (i !== "." ? "O" : i)).join(""));
}

function planBoom(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === ".") {
        grid[i][j] = 1;
      } else {
        grid[i][j] = 0;
      }
    }
  }
  return grid;
}

function detonates(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        grid = detonate(i, j, grid);
      }
    }
  }
  return grid;
}

function detonate(x, y, grid) {
  grid[x][y] = ".";
  if (x > 0 && grid[x - 1][y] !== 0) grid[x - 1][y] = ".";
  if (x < grid.length - 1 && grid[x + 1][y] !== 0) grid[x + 1][y] = ".";
  if (y > 0 && grid[x][y - 1] !== 0) grid[x][y - 1] = ".";
  if (y < grid[0].length - 1 && grid[x][y + 1] !== 0) grid[x][y + 1] = ".";
  return grid;
}

const testCases = [
  {
    input: [3, [".......", "...O...", "....O..", ".......", "OO.....", "OO....."]],
    expected: ["OOO.OOO", "OO...OO", "OOO...O", "..OO.OO", "...OOOO", "...OOOO"],
  },
  {
    input: [5, [".......", "...O.O.", "....O..", "..O....", "OO...OO", "OO.O..."]],
    expected: [".......", "...O.O.", "...OO..", "..OOOO.", "OOOOOOO", "OOOOOOO"],
  },
  {
    input: [
      181054341,
      [
        "O..OO........O..O........OO.O.OO.OO...O.....OOO...OO.O..OOOOO...O.O..O..O.O..OOO..O..O..O....O...O....O...O..O..O....O.O.O.O.....O.....OOOO..O......O.O.....OOO....OO....OO....O.O...O..OO....OO..O...O",
      ],
    ],
    expected: [
      "OOOOO........OOOO........OOOOOOOOOO...O.....OOO...OOOOOOOOOOO...OOOOOOOOOOOOOOOOOOOOOOOOO....O...O....O...OOOOOOO....OOOOOOO.....O.....OOOOOOO......OOO.....OOO....OO....OO....OOO...OOOOO....OOOOO...O",
    ],
  },
];
test(testCases, bomberMan);
