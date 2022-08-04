const test = require("../../lib/test");

enum DIRECTION {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
  TOP_LEFT = "top_left",
  TOP_RIGHT = "top_right",
  BOTTOM_LEFT = "bottom_left",
  BOTTOM_RIGHT = "bottom_right",
  NONE = "none",
}

type TMoves = {
  [key in DIRECTION]?: number[];
};

/**
 * TC: O(k)
 * SC: O(k)
 *
 * @param n
 * @param k
 * @param r_q
 * @param c_q
 * @param obstacles
 * @returns number
 */
function queensAttack(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
  let totalMoves = getTotalMoves(n, r_q, c_q);

  const blockMoves = getQueenBlockMoves(n, r_q, c_q, obstacles);
  Object.values(blockMoves).forEach((moves) => {
    totalMoves -= Math.max(...moves);
  });

  return totalMoves;
}

function getDirectionMoves(n: number, rq: number, cq: number, direction: DIRECTION): number {
  switch (direction) {
    case DIRECTION.LEFT:
      return cq - 1;
    case DIRECTION.RIGHT:
      return n - cq;
    case DIRECTION.TOP:
      return n - rq;
    case DIRECTION.BOTTOM:
      return rq - 1;
    case DIRECTION.TOP_LEFT:
      return Math.min(n - rq, cq - 1);
    case DIRECTION.TOP_RIGHT:
      return n - Math.max(rq, cq);
    case DIRECTION.BOTTOM_RIGHT:
      return Math.min(rq - 1, n - cq);
    case DIRECTION.BOTTOM_LEFT:
      return Math.min(rq, cq) - 1;
    default:
      return 0;
  }
}

function getDirection(rq: number, cq: number, ro: number, co: number): DIRECTION {
  const tr = ro - rq;
  const tc = co - cq;
  if (tr === 0) {
    return tc > 0 ? DIRECTION.RIGHT : DIRECTION.LEFT;
  }
  if (tc === 0) {
    return tr > 0 ? DIRECTION.TOP : DIRECTION.BOTTOM;
  }

  if (Math.abs(tc) === Math.abs(tr)) {
    if (ro > rq && co > cq) {
      return DIRECTION.TOP_RIGHT;
    }
    if (ro < rq && co < cq) {
      return DIRECTION.BOTTOM_LEFT;
    }
    if (ro > rq && co < cq) {
      return DIRECTION.TOP_LEFT;
    }
    if (ro < rq && co > cq) {
      return DIRECTION.BOTTOM_RIGHT;
    }
  }

  return DIRECTION.NONE;
}

function getTotalMoves(n: number, rq: number, cq: number): number {
  let total = (n - 1) * 2;
  [DIRECTION.TOP_LEFT, DIRECTION.TOP_RIGHT, DIRECTION.BOTTOM_LEFT, DIRECTION.BOTTOM_RIGHT].forEach((d) => {
    total += getDirectionMoves(n, rq, cq, d);
  });

  return total;
}

function getQueenBlockMoves(n: number, rq: number, cq: number, obstacles: number[][]): TMoves {
  const blockMoves: TMoves = {};

  obstacles.forEach((obstacle) => {
    const direction: DIRECTION = getDirection(rq, cq, obstacle[0], obstacle[1]);
    if (direction === DIRECTION.NONE) {
      return;
    }

    const totalMoves: number = getDirectionMoves(n, obstacle[0], obstacle[1], direction) + 1;
    if (blockMoves?.[direction]) {
      blockMoves[direction]?.push(totalMoves);
    } else {
      blockMoves[direction] = [totalMoves];
    }
  });

  return blockMoves;
}

const testCases = [
  {
    input: [4, 0, 4, 4, []],
    expected: 9,
  },
  {
    input: [8, 0, 4, 4, []],
    expected: 27,
  },
  {
    input: [8, 1, 4, 4, [[3, 5]]],
    expected: 24,
  },
  {
    //prettier-ignore
    input: [5,3,4,3,[[5, 5],[4, 2],[2, 3]]],
    expected: 10,
  },
  {
    //prettier-ignore
    input: [9,5,5,6,[[5, 4], [5, 2], [6,6], [6,7], [7,6]]],
    expected: 19,
  },
  {
    //prettier-ignore
    input: [100,100,48,81,[[54, 87],[64, 97],[42, 75],[32, 65],[42, 87],[32, 97],[54, 75],[64, 65],[48, 87],[48, 75],[54, 81],[42, 81],[45, 17],[14, 24],[35, 15],[95, 64],[63, 87],[25, 72],[71, 38],[96, 97],[16, 30],[60, 34],[31, 67],[26, 82],[20, 93],[81, 38],[51, 94],[75, 41],[79, 84],[79, 65],[76, 80],[52, 87],[81, 54],[89, 52],[20, 31],[10, 41],[32, 73],[83, 98],[87, 61],[82, 52],[80, 64],[82, 46],[49, 21],[73, 86],[37, 70],[43, 12],[94, 28],[10, 93],[52, 25],[50, 61],[52, 68],[52, 23],[60, 91],[79, 17],[93, 82],[12, 18],[75, 64],[69, 69],[94, 74],[61, 61],[46, 57],[67, 45],[96, 64],[83, 89],[58, 87],[76, 53],[79, 21],[94, 70],[16, 10],[50, 82],[92, 20],[40, 51],[49, 28],[51, 82],[35, 16],[15, 86],[78, 89],[41, 98],[70, 46],[79, 79],[24, 40],[91, 13],[59, 73],[35, 32],[40, 31],[14, 31],[71, 35],[96, 18],[27, 39],[28, 38],[41, 36],[31, 63],[52, 48],[81, 25],[49, 90],[32, 65],[25, 45],[63, 94],[89, 50],[43, 41],]],
    expected: 40,
  },
];
test(testCases, queensAttack);
